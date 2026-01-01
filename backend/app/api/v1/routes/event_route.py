from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from typing import List

from app.core.database import get_db
from app.schemas.event_schema import EventResponse, EventCreate
from app.services import event_service

router = APIRouter()

@router.get("/", response_model=List[EventResponse])
async def read_events(db: AsyncSession = Depends(get_db)):
    """
    Get all active events sorted by display order.
    Does not require authentication.
    """
    events = await event_service.get_all_active_events(db)
    return events

@router.post("/", response_model=EventResponse)
async def create_event(event: EventCreate, db: AsyncSession = Depends(get_db)):
    """
    Create a new event (For seeding purposes mostly)
    """
    return await event_service.create_event(db, event)