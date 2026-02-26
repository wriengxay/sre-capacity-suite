#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
echo "Creating virtualenv if missing..."
python3 -m venv .venv || true
source .venv/bin/activate
pip install -q -r requirements.txt
echo "Generating sample metrics..."
python3 analysis/generate_sample_metrics.py
echo "Analyzing sample metrics..."
python3 analysis/analyze.py sample_metrics.csv
