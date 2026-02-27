import math
import subprocess
from datetime import datetime, timedelta
import pandas as pd
import numpy as np

try:
    from .prometheus_fetch import fetch_range
except Exception:
    try:
        from analysis.prometheus_fetch import fetch_range
    except Exception:
        from prometheus_fetch import fetch_range

try:
    from .prometheus_agg import aggregate_prometheus_by_deployment
except Exception:
    try:
        from analysis.prometheus_agg import aggregate_prometheus_by_deployment
    except Exception:
        try:
            from prometheus_agg import aggregate_prometheus_by_deployment
        except Exception:
            aggregate_prometheus_by_deployment = None

try:
    from .report import generate_html
except Exception:
    try:
        from analysis.report import generate_html
    except Exception:
        from report import generate_html


def compute_recommendation_from_df(df: pd.DataFrame, target_cpu_util=0.75, cpu_cost_per_vcpu_hour=0.03):
    df = df.copy()
    if "cpu_millicores_total" in df.columns and "replicas" in df.columns:
        df["cpu_per_replica_mcpu"] = df["cpu_millicores_total"] / df["replicas"]
        current_replicas = int(df["replicas"].median())
    elif "value" in df.columns:
        # assume df.value is total mCPU across pods and replicas not known
        # treat series as per-replica if user supplied per-replica query
        df["cpu_per_replica_mcpu"] = df["value"]
        current_replicas = 1
    else:
        raise ValueError("DataFrame must contain cpu_millicores_total and replicas, or value column")

    p95_mcpu = float(df["cpu_per_replica_mcpu"].quantile(0.95))
    p95_cores = p95_mcpu / 1000.0
    recommended = max(1, math.ceil((p95_cores * current_replicas) / target_cpu_util))

    # cost estimate
    hours_month = 24 * 30
    current_cost = current_replicas * cpu_cost_per_vcpu_hour * hours_month
    rec_cost = recommended * cpu_cost_per_vcpu_hour * hours_month

    print(f"95th-percentile per-replica CPU: {p95_mcpu:.1f} mCPU ({p95_cores:.3f} cores)")
    print(f"Current replicas (median): {current_replicas}")
    print(f"Recommended replicas (target util {int(target_cpu_util*100)}%): {recommended}")
    print(f"Estimated monthly CPU cost — current: ${current_cost:.2f}, recommended: ${rec_cost:.2f}")

    return {
        "p95_mcpu": p95_mcpu,
        "current_replicas": current_replicas,
        "recommended_replicas": recommended,
        "current_monthly_cost": current_cost,
        "recommended_monthly_cost": rec_cost,
    }


def detect_trend(df: pd.DataFrame) -> dict:
    """Simple trend detection on per-replica p95 over two halves of the timeseries."""
    out = {}
    if "cpu_per_replica_mcpu" not in df.columns:
        if "cpu_millicores_total" in df.columns and "replicas" in df.columns:
            df = df.copy()
            df["cpu_per_replica_mcpu"] = df["cpu_millicores_total"] / df["replicas"]
        elif "value" in df.columns:
            df = df.copy()
            df["cpu_per_replica_mcpu"] = df["value"]
        else:
            return {"trend": "unknown"}

    n = len(df)
    if n < 4:
        return {"trend": "insufficient_data"}

    first_half_p95 = float(df.iloc[: n // 2]["cpu_per_replica_mcpu"].quantile(0.95))
    second_half_p95 = float(df.iloc[n // 2 :]["cpu_per_replica_mcpu"].quantile(0.95))
    pct_change = (second_half_p95 - first_half_p95) / max(1.0, first_half_p95)
    out["first_half_p95_mcpu"] = first_half_p95
    out["second_half_p95_mcpu"] = second_half_p95
    out["pct_change"] = pct_change
    out["trend"] = "increasing" if pct_change > 0.10 else "decreasing" if pct_change < -0.10 else "stable"
    print(f"P95 trend: {first_half_p95:.1f} -> {second_half_p95:.1f} mCPU ({pct_change*100:.1f}% change) => {out['trend']}")
    return out


def get_vpa_recommendation_from_k8s(deployment: str, namespace: str = "default") -> dict:
    """Use the Kubernetes Python client to fetch VPA recommendations for a deployment.

    Returns a dict with key `vpa_recommendation` containing the recommendation object
    or None if not found.
    """
    try:
        from kubernetes import client, config
        # Try in-cluster then kubeconfig
        try:
            config.load_incluster_config()
        except Exception:
            config.load_kube_config()

        api = client.CustomObjectsApi()
        group = "autoscaling.k8s.io"
        version = "v1"
        plural = "verticalpodautoscalers"
        try:
            res = api.list_namespaced_custom_object(group=group, version=version, namespace=namespace, plural=plural)
        except Exception:
            # Fallback to cluster-wide list
            res = api.list_cluster_custom_object(group=group, version=version, plural=plural)

        items = res.get("items", [])
        for item in items:
            target = item.get("spec", {}).get("targetRef", {})
            if target.get("name") == deployment:
                rec = item.get("status", {}).get("recommendation", None)
                return {"vpa_recommendation": rec}
    except Exception as e:
        print(f"K8s VPA lookup failed: {e}")
    # Fallback: try kubectl if present
    try:
        cmd = ["kubectl", "get", "verticalpodautoscalers", "-n", namespace, "-o", "json"]
        res = subprocess.run(cmd, capture_output=True, text=True, check=True)
        import json

        j = json.loads(res.stdout)
        for item in j.get("items", []):
            target = item.get("spec", {}).get("targetRef", {})
            if target.get("name") == deployment:
                rec = item.get("status", {}).get("recommendation", {})
                return {"vpa_recommendation": rec}
    except Exception:
        pass
    return {"vpa_recommendation": None}


if __name__ == "__main__":
    import argparse

    p = argparse.ArgumentParser()
    p.add_argument("csv", nargs="?", default=None, help="Local CSV file with sample metrics")
    p.add_argument("--prometheus-url", help="Prometheus base URL (http://host:9090)")
    p.add_argument("--cpu-query", help="Prometheus range query returning CPU (mCPU) per timestamp")
    p.add_argument("--replica-query", help="Prometheus range query returning replica count per timestamp")
    p.add_argument("--start", help="Start time (RFC3339) for Prometheus queries")
    p.add_argument("--end", help="End time (RFC3339) for Prometheus queries")
    p.add_argument("--vpa-deployment", help="Deployment name to lookup VPA recommendation (uses Kubernetes Python client)")
    p.add_argument("--namespace", default="default")
    p.add_argument("--report", help="Path to write HTML report (optional)")
    args = p.parse_args()

    if args.prometheus_url and args.cpu_query:
        # build time window
        if args.start:
            start = datetime.fromisoformat(args.start)
        else:
            start = datetime.utcnow() - timedelta(hours=4)
        if args.end:
            end = datetime.fromisoformat(args.end)
        else:
            end = datetime.utcnow()

        # Try to aggregate pod-level series into deployments when possible
        cpu_df = None
        if aggregate_prometheus_by_deployment:
            try:
                agg = aggregate_prometheus_by_deployment(args.prometheus_url, args.cpu_query, start, end, step="60s")
                if agg:
                    # If user requested a specific deployment, choose that one
                    if args.vpa_deployment and args.vpa_deployment in agg:
                        cpu_df = agg[args.vpa_deployment]
                    elif len(agg) == 1:
                        # only one deployment present
                        cpu_df = list(agg.values())[0]
                    else:
                        # multiple deployments: sum across them (treat as total)
                        # align timestamps by seconds and sum values
                        all_ts = set()
                        for df_ in agg.values():
                            all_ts.update(df_["timestamp"].astype("int64") // 10 ** 9)
                        all_ts = sorted(all_ts)
                        rows = []
                        for t in all_ts:
                            s = 0.0
                            for df_ in agg.values():
                                df_["ts_s"] = df_["timestamp"].astype("int64") // 10 ** 9
                                vrow = df_.loc[df_["ts_s"] == t, "value"]
                                if not vrow.empty:
                                    s += float(vrow.iloc[0])
                            rows.append((pd.to_datetime(t, unit='s'), s))
                        cpu_df = pd.DataFrame(rows, columns=["timestamp", "value"]) if rows else None
            except Exception as e:
                print(f"Aggregation by deployment failed: {e}")

        if cpu_df is None:
            cpu_df = fetch_range(args.prometheus_url, args.cpu_query, start, end, step="60s")
        if args.replica_query:
            rep_df = fetch_range(args.prometheus_url, args.replica_query, start, end, step="60s")
            # join on timestamp (second precision)
            cpu_df["ts_s"] = cpu_df["timestamp"].astype("int64") // 10 ** 9
            rep_df["ts_s"] = rep_df["timestamp"].astype("int64") // 10 ** 9
            merged = cpu_df.merge(rep_df[["ts_s", "value"]], on="ts_s", how="left")
            merged = merged.rename(columns={"value_x": "value", "value_y": "replicas"})
            merged = merged.drop(columns=["ts_s"]) 
            # assume cpu query returned total mCPU
            merged = merged.rename(columns={"value": "cpu_millicores_total"})
            df = merged[ ["timestamp", "cpu_millicores_total", "replicas"] ]
        else:
            df = cpu_df

        res = compute_recommendation_from_df(df)
        trend = detect_trend(df)
        vpa = None
        if args.vpa_deployment:
            vpa = get_vpa_recommendation_from_k8s(args.vpa_deployment, args.namespace)
        if args.report:
            import os

            os.makedirs(os.path.dirname(args.report) or ".", exist_ok=True)
            generate_html(args.report, df, res, trend, vpa)
            print(f"Wrote HTML report to {args.report}")
    elif args.csv:
        df = pd.read_csv(args.csv, parse_dates=["timestamp"]) if args.csv else None
        if df is None:
            raise SystemExit("No CSV provided")
        res = compute_recommendation_from_df(df)
        trend = detect_trend(df)
        vpa = None
        if args.vpa_deployment:
            vpa = get_vpa_recommendation_from_k8s(args.vpa_deployment, args.namespace)
        if args.report:
            import os

            os.makedirs(os.path.dirname(args.report) or ".", exist_ok=True)
            generate_html(args.report, df, res, trend, vpa)
            print(f"Wrote HTML report to {args.report}")
    else:
        print("Provide either a CSV file or --prometheus-url with --cpu-query")

    if args.vpa_deployment and not (args.prometheus_url and args.cpu_query):
        v = get_vpa_recommendation_from_k8s(args.vpa_deployment, args.namespace)
        print("VPA:", v)

