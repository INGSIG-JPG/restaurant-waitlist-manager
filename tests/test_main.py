from fastapi.testclient import TestClient
from backend.main import app

client = TestClient(app)

def test_read_root():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"message": "Welcome to Restaurant Waitlist Manager API"}

def test_add_and_get_waitlist():
    response = client.post("/waitlist", json={"name": "John Doe", "party_size": 4})
    assert response.status_code == 200
    data = response.json()
    assert data["name"] == "John Doe"
    assert data["party_size"] == 4
    assert data["status"] == "waiting"
