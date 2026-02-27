import sys
import types
import os

# Ensure project root is on sys.path so `analysis` package can be imported
ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
if ROOT not in sys.path:
    sys.path.insert(0, ROOT)


def test_get_vpa_recommendation_from_k8s(monkeypatch):
    # Prepare a fake VPA item
    fake_items = [
        {
            "spec": {"targetRef": {"name": "my-deploy"}},
            "status": {
                "recommendation": {
                    "containerRecommendations": [
                        {"containerName": "app", "target": {"cpu": "200m"}}
                    ]
                }
            },
        }
    ]

    class FakeAPI:
        def list_namespaced_custom_object(self, group, version, namespace, plural):
            return {"items": fake_items}

        def list_cluster_custom_object(self, group, version, plural):
            return {"items": fake_items}

    # Create a fake kubernetes module
    fake_k8s = types.ModuleType("kubernetes")
    fake_k8s.client = types.SimpleNamespace(CustomObjectsApi=lambda: FakeAPI())

    class FakeConfig:
        def load_incluster_config(self):
            raise Exception("no in-cluster")

        def load_kube_config(self):
            return None

    fake_k8s.config = FakeConfig()

    monkeypatch.setitem(sys.modules, "kubernetes", fake_k8s)

    # Import the function and call it
    from analysis.analyze import get_vpa_recommendation_from_k8s

    res = get_vpa_recommendation_from_k8s("my-deploy", "default")
    assert res and "vpa_recommendation" in res
    assert res["vpa_recommendation"] == fake_items[0]["status"]["recommendation"]


def test_get_vpa_recommendation_kubectl_fallback(monkeypatch):
    # Ensure kubernetes module is not present to force kubectl fallback
    monkeypatch.setitem(sys.modules, "kubernetes", None)

    import subprocess

    fake_items = [
        {
            "spec": {"targetRef": {"name": "kc-deploy"}},
            "status": {"recommendation": {"foo": "bar"}},
        }
    ]

    class FakeCompleted:
        def __init__(self, stdout):
            self.stdout = stdout

    def fake_run(cmd, capture_output, text, check):
        import json

        return FakeCompleted(json.dumps({"items": fake_items}))

    monkeypatch.setattr(subprocess, "run", fake_run)

    from analysis.analyze import get_vpa_recommendation_from_k8s

    res = get_vpa_recommendation_from_k8s("kc-deploy", "default")
    assert res and res["vpa_recommendation"] == fake_items[0]["status"]["recommendation"]


def test_vpa_not_found_returns_none(monkeypatch):
    # Mock kubernetes client to return no items
    fake_k8s = types.ModuleType("kubernetes")
    class FakeAPI:
        def list_namespaced_custom_object(self, group, version, namespace, plural):
            return {"items": []}

        def list_cluster_custom_object(self, group, version, plural):
            return {"items": []}

    fake_k8s.client = types.SimpleNamespace(CustomObjectsApi=lambda: FakeAPI())

    class FakeConfig:
        def load_incluster_config(self):
            raise Exception("no in-cluster")

        def load_kube_config(self):
            return None

    fake_k8s.config = FakeConfig()
    monkeypatch.setitem(sys.modules, "kubernetes", fake_k8s)

    from analysis.analyze import get_vpa_recommendation_from_k8s
    res = get_vpa_recommendation_from_k8s("nope", "default")
    assert res == {"vpa_recommendation": None}
