from pydantic import BaseModel, ConfigDict
from typing import Optional

class EventBase(BaseModel):
    name: str
    description: Optional[str] = None
    image_url: Optional[str] = None
    slider_image_url: Optional[str] = None
    display_order: int = 0
    is_active: bool = True

class EventCreate(EventBase):
    pass

class EventResponse(EventBase):
    id: int

    # Config to allow reading from ORM models
    model_config = ConfigDict(from_attributes=True)