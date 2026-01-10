from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from typing import List

from app.core.database import get_db
from app.schemas.product_schema import ProductResponse
from app.services import product_service

router = APIRouter()

@router.get("/event/{event_id}", response_model=List[ProductResponse])
async def read_event_products(event_id: int, db: AsyncSession = Depends(get_db)):
    """
    Get all active products for a specific event ID.
    """
    products = await product_service.get_products_by_event(db, event_id)
    return products