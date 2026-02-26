import requests
import pandas as pd
from datetime import datetime
from typing import List, Dict


def fetch_range(prom_url: str, query: str, start: datetime, end: datetime, step: str = "60s") -> pd.DataFrame:
    """Fetch a range vector from Prometheus and return a DataFrame with columns [timestamp, value].

    If the query returns multiple series, values are summed per timestamp.
    """
    url = prom_url.rstrip("/") + "/api/v1/query_range"
    params = {
        "query": query,
        "start": int(start.timestamp()),
        "end": int(end.timestamp()),
        "step": step,
    }
    r = requests.get(url, params=params, timeout=30)
    r.raise_for_status()
    data = r.json()
    if data["status"] != "success":
        raise RuntimeError("Prometheus query failed")

    results = data["data"]["result"]
    if not results:
        return pd.DataFrame(columns=["timestamp", "value"]) 

    # Collect values by timestamp across all series
    ts_map: Dict[int, float] = {}
    for serie in results:
        for ts, val in serie.get("values", []):
            t = int(float(ts))
            v = float(val)
            ts_map[t] = ts_map.get(t, 0.0) + v

    rows = [(datetime.utcfromtimestamp(t), v) for t, v in sorted(ts_map.items())]
    df = pd.DataFrame(rows, columns=["timestamp", "value"])
    return df
