from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from app.models.product import Product
from typing import List
import logging

logger = logging.getLogger("uvicorn")

async def get_products_by_event(db: AsyncSession, event_id: int) -> List[Product]:
    try:
        # Fetch active products for the specific event
        query = select(Product).where(
            Product.event_id == event_id,
            Product.is_active == True
        ).order_by(Product.category, Product.name)
        
        result = await db.execute(query)
        products = list(result.scalars().all())
        return products
    except Exception as e:
        logger.error(f"Error fetching products for event {event_id}: {str(e)}")
        raise e