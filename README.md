# SRE Capacity Planning & Autoscaling Suite (starter)

[![CI](https://github.com/wriengxay/sre-capacity-suite/actions/workflows/ci.yml/badge.svg)](https://github.com/wriengxay/sre-capacity-suite/actions)
[![Release](https://img.shields.io/github/v/release/wriengxay/sre-capacity-suite)](https://github.com/wriengxay/sre-capacity-suite/releases/latest)
[![Pages](https://img.shields.io/badge/pages-published-blue)](https://wriengxay.github.io/sre-capacity-suite/output/report.html)

This repository is a minimal starter for a Capacity Planning & Autoscaling Suite.

Contents
- `analysis/` — sample metric generator and lightweight analyzer that suggests HPA/VPA sizing and a cost estimate.
- `k8s/` — example Kubernetes HPA manifest template.
- `scripts/` — convenience run script.

Quick start (macOS):

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
./scripts/run_demo.sh
```

What this demo does
- Generates synthetic CPU/memory timeseries for a deployment.
- Runs a simple analyzer that computes 95th percentile usage and recommends replica counts for a target CPU utilization.
- Outputs a tiny cost estimate comparing current vs recommended sizing.

Next steps
- Plug real Prometheus metrics (scraped `container_cpu_usage_seconds_total` and `kube_pod_container_resource_limits`).
- Extend analyzer to use VPA recommendations and historical trends.

License
This project is released under the MIT License — see the `LICENSE` file for details.
