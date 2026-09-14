from fastapi import FastAPI

app = FastAPI(title="Restaurant Waitlist Manager")

@app.get("/")
def read_root():
    return {"message": "Welcome to Restaurant Waitlist Manager API"}
