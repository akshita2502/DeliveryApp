from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession, async_sessionmaker
from sqlalchemy.orm import declarative_base
import os

# Ensure you have a postgres DB running. 
# URL format: postgresql+asyncpg://user:password@host:port/dbname
DATABASE_URL = os.getenv("DATABASE_URL", "postgresql+asyncpg://postgres:root@localhost:5433/eventkart_db")

engine = create_async_engine(DATABASE_URL, echo=True)

AsyncSessionLocal = async_sessionmaker(
    engine,
    class_=AsyncSession,
    expire_on_commit=False,
    autocommit=False,
    autoflush=False,
)

Base = declarative_base()

async def get_db():
    async with AsyncSessionLocal() as session:
        try:
            yield session
        finally:
            await session.close()