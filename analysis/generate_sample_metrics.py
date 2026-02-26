import csv
import random
from datetime import datetime, timedelta

def generate(filename: str, minutes: int = 60, replicas: int = 3):
    now = datetime.utcnow()
    start = now - timedelta(minutes=minutes)
    rows = []
    for i in range(minutes):
        t = start + timedelta(minutes=i)
        # simulate total CPU in millicores
        avg_per_replica = random.uniform(100, 600)  # mCPU per replica
        # occasional spike
        if random.random() < 0.05:
            avg_per_replica *= random.uniform(2.0, 4.0)
        total_cpu_millicores = int(avg_per_replica * replicas)
        memory_mb = int(random.uniform(200, 600) * replicas)
        rows.append((t.isoformat(), total_cpu_millicores, memory_mb, replicas))

    with open(filename, "w", newline="") as f:
        w = csv.writer(f)
        w.writerow(["timestamp", "cpu_millicores_total", "memory_mb_total", "replicas"])
        w.writerows(rows)

if __name__ == "__main__":
    generate("sample_metrics.csv", minutes=240, replicas=3)
