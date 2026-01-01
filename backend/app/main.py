import logging
import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from contextlib import asynccontextmanager

from app.core.database import engine, Base
from app.api.v1.routes import event_route

# Setup Logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("uvicorn")

# Lifecycle management for DB tables creation
@asynccontextmanager
async def lifespan(app: FastAPI):
    async with engine.begin() as conn:
        # Warning: This creates tables if they don't exist. 
        # In production, use Alembic migrations.
        await conn.run_sync(Base.metadata.create_all)
    yield

app = FastAPI(title="EventKart API", version="1.0.0", lifespan=lifespan)

# CORS Setup
origins = [
    "http://localhost:5173",  # React Vite default port
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- STATIC FILE MOUNTING ---
# We mount the 'data' directory (located one level up from backend) to '/static'
# When DB says 'events/IMG1.jpg', frontend calls 'http://localhost:8000/static/events/IMG1.jpg'
BASE_DIR = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
DATA_DIR = os.path.join(BASE_DIR, "data")

if not os.path.exists(DATA_DIR):
    os.makedirs(DATA_DIR)
    logger.warning(f"Created data directory at {DATA_DIR}")

app.mount("/static", StaticFiles(directory=DATA_DIR), name="static")

# Include Routers
app.include_router(event_route.router, prefix="/api/v1/events", tags=["Events"])

@app.get("/health")
async def health_check():
    return {"status": "ok"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("app.main:app", host="0.0.0.0", port=8000, reload=True)