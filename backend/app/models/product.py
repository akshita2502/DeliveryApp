from sqlalchemy import Column, Integer, String, Float, Boolean, ForeignKey
from sqlalchemy.orm import relationship
from app.core.database import Base

class Product(Base):
    __tablename__ = "products"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True, nullable=False)
    description = Column(String, nullable=True)
    actual_price = Column(Float, nullable=False)
    discounted_price = Column(Float, nullable=True)
    image_url = Column(String, nullable=True)
    category = Column(String, index=True, nullable=False) # e.g., "Cakes", "Decor"
    is_bundle = Column(Boolean, default=False)
    is_active = Column(Boolean, default=True)
    stock_count = Column(Integer, default=100)
    
    # Foreign Key to link with Event
    event_id = Column(Integer, ForeignKey("events.id"), nullable=False)
    
    # Relationship (Optional, helpful for joins)
    event = relationship("app.models.event.Event", backref="products")