# Restaurant Waitlist Manager

A full-stack application built with AI assistance for managing restaurant customer queues efficiently, featuring a FastAPI backend, a React frontend, SQLite persistence, and automated tests.

## Tech Stack
- **Backend:** FastAPI (Python 3.12), SQLite
- **Frontend:** React + Vite
- **Testing:** Pytest, FastAPI TestClient

---

## Running the Project Locally

### 1. Backend Setup
Navigate into the repository root and run the backend using `uv` and `uvicorn`:
```bash
uv run uvicorn backend.main:app --reload
