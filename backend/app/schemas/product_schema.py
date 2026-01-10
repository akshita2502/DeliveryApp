from pydantic import BaseModel, ConfigDict
from typing import Optional

class ProductBase(BaseModel):
    name: str
    description: Optional[str] = None
    actual_price: float
    discounted_price: Optional[float] = None
    image_url: Optional[str] = None
    category: str
    is_bundle: bool = False
    is_active: bool = True
    event_id: int

class ProductCreate(ProductBase):
    pass

class ProductResponse(ProductBase):
    id: int
    model_config = ConfigDict(from_attributes=True)