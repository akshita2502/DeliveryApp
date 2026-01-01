from sqlalchemy import Column, Integer, String, Boolean, Text
from app.core.database import Base

class Event(Base):
    __tablename__ = "events"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True, nullable=False)
    description = Column(Text, nullable=True)
    
    # URL for the card view (Browse by Occasion)
    image_url = Column(String, nullable=True) 
    
    # URL for the Hero Slider background
    slider_image_url = Column(String, nullable=True)
    
    display_order = Column(Integer, default=0)
    is_active = Column(Boolean, default=True)