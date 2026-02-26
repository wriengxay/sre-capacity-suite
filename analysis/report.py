import os
from typing import Optional
import pandas as pd
import io
import base64
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
import plotly.graph_objects as go
import plotly.io as pio


def _plot_to_base64(fig) -> str:
    buf = io.BytesIO()
    fig.savefig(buf, format="png", bbox_inches="tight")
    plt.close(fig)
    buf.seek(0)
    return base64.b64encode(buf.read()).decode("ascii")


def _make_plots(df: pd.DataFrame) -> dict:
    plots = {}
    try:
        d = df.copy()
        if "cpu_millicores_total" in d.columns and "replicas" in d.columns:
            d["cpu_per_replica_mcpu"] = d["cpu_millicores_total"] / d["replicas"]
        if "memory_mb_total" in d.columns and "replicas" in d.columns:
            d["memory_per_replica_mb"] = d["memory_mb_total"] / d["replicas"]

        # CPU per-replica plot
        if "cpu_per_replica_mcpu" in d.columns:
            fig, ax = plt.subplots(figsize=(8, 3))
            ax.plot(d["timestamp"], d["cpu_per_replica_mcpu"], label="cpu_per_replica_mcpu")
            ax.set_ylabel("mCPU")
            ax.set_title("Per-replica CPU (mCPU) over time")
            ax.grid(True)
            plots["cpu"] = _plot_to_base64(fig)

        # Memory per-replica plot
        if "memory_per_replica_mb" in d.columns:
            fig, ax = plt.subplots(figsize=(8, 3))
            ax.plot(d["timestamp"], d["memory_per_replica_mb"], label="memory_per_replica_mb", color="tab:orange")
            ax.set_ylabel("MB")
            ax.set_title("Per-replica Memory (MB) over time")
            ax.grid(True)
            plots["memory"] = _plot_to_base64(fig)
    except Exception:
        pass
    return plots


def _make_interactive_divs(df: pd.DataFrame) -> dict:
    divs = {}
    try:
        d = df.copy()
        if "cpu_millicores_total" in d.columns and "replicas" in d.columns:
            d["cpu_per_replica_mcpu"] = d["cpu_millicores_total"] / d["replicas"]
        if "memory_mb_total" in d.columns and "replicas" in d.columns:
            d["memory_per_replica_mb"] = d["memory_mb_total"] / d["replicas"]

        if "cpu_per_replica_mcpu" in d.columns:
            fig = go.Figure()
            fig.add_trace(go.Scatter(x=d["timestamp"], y=d["cpu_per_replica_mcpu"], mode="lines", name="cpu_per_replica_mcpu"))
            fig.update_layout(title="Per-replica CPU (mCPU)", xaxis_title="time", yaxis_title="mCPU", height=300)
            divs["cpu_div"] = pio.to_html(fig, full_html=False, include_plotlyjs="cdn")

        if "memory_per_replica_mb" in d.columns:
            fig = go.Figure()
            fig.add_trace(go.Scatter(x=d["timestamp"], y=d["memory_per_replica_mb"], mode="lines", name="memory_per_replica_mb", line=dict(color="orange")))
            fig.update_layout(title="Per-replica Memory (MB)", xaxis_title="time", yaxis_title="MB", height=300)
            divs["mem_div"] = pio.to_html(fig, full_html=False, include_plotlyjs="cdn")
    except Exception:
        pass
    return divs


def generate_html(report_path: str, df: pd.DataFrame, results: dict, trend: dict, vpa: Optional[dict] = None):
    os.makedirs(os.path.dirname(report_path) or ".", exist_ok=True)
    title = "Capacity Analysis Report"

    # create plots and embed as base64
    plots = _make_plots(df)
    divs = _make_interactive_divs(df)

    summary_html = """
    <h2>Summary</h2>
    <ul>
      <li>95th-percentile per-replica CPU (mCPU): {p95:.1f}</li>
      <li>Current replicas: {curr}</li>
      <li>Recommended replicas: {rec}</li>
      <li>Current monthly CPU cost: ${cur_cost:.2f}</li>
      <li>Recommended monthly CPU cost: ${rec_cost:.2f}</li>
      <li>Trend: {trend}</li>
    </ul>
    """.format(
        p95=results.get("p95_mcpu", 0.0),
        curr=results.get("current_replicas", "?"),
        rec=results.get("recommended_replicas", "?"),
        cur_cost=results.get("current_monthly_cost", 0.0),
        rec_cost=results.get("recommended_monthly_cost", 0.0),
        trend=trend.get("trend", "unknown"),
    )

    vpa_html = ""
    if vpa:
        vpa_html = f"<h3>VPA Recommendation</h3><pre>{vpa}</pre>"

    head_html = ""
    try:
        head_html = df.head(20).to_html(index=False)
    except Exception:
        head_html = "<p>No sample table available.</p>"

    plots_html = ""
    if "cpu" in plots:
        plots_html += f'<h2>CPU (PNG)</h2><img src="data:image/png;base64,{plots["cpu"]}" alt="cpu plot"/>'
    if "memory" in plots:
        plots_html += f'<h2>Memory (PNG)</h2><img src="data:image/png;base64,{plots["memory"]}" alt="memory plot"/>'
    # interactive divs
    if "cpu_div" in divs:
        plots_html += f'<h2>CPU (interactive)</h2>{divs["cpu_div"]}'
    if "mem_div" in divs:
        plots_html += f'<h2>Memory (interactive)</h2>{divs["mem_div"]}'

    html = f"""
    <html>
    <head><meta charset="utf-8"><title>{title}</title></head>
    <body>
      <h1>{title}</h1>
      {summary_html}
      {vpa_html}
      {plots_html}
      <h2>Sample Data</h2>
      {head_html}
    </body>
    </html>
    """

    with open(report_path, "w") as f:
        f.write(html)

    return report_path
