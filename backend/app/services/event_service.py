from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from app.models.event import Event
from typing import List
import logging

logger = logging.getLogger("uvicorn")

async def get_all_active_events(db: AsyncSession) -> List[Event]:
    try:
        query = select(Event).where(Event.is_active == True).order_by(Event.display_order)
        result = await db.execute(query)
        events = list(result.scalars().all())
        return events
    except Exception as e:
        logger.error(f"Error fetching events: {str(e)}")
        raise e

async def create_event(db: AsyncSession, event_data):
    # Helper to populate DB initially
    new_event = Event(**event_data.dict())
    db.add(new_event)
    await db.commit()
    await db.refresh(new_event)
    return new_event