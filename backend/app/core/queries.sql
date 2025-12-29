-- Create Database
DROP DATABASE IF EXISTS eventkart_db;
CREATE DATABASE eventkart_db
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LOCALE_PROVIDER = 'libc'
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;
-- Create Events Table
CREATE TABLE IF NOT EXISTS events (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    image_url VARCHAR(255),
    slider_image_url VARCHAR(255),
    display_order INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create index on name column for faster lookups
CREATE INDEX IF NOT EXISTS idx_events_name ON events(name);

-- Create index on is_active column for filtering
CREATE INDEX IF NOT EXISTS idx_events_is_active ON events(is_active);



-- Insertion Script for Events
INSERT INTO events (name, description, image_url, slider_image_url, display_order, is_active)
VALUES 
(
    'Birthday Bash', 
    'Celebrate in style with unforgettable parties, custom cakes, and magical moments.', 
    'events/IMG1.jpg', 
    'events/IMG1.jpg', 
    1, 
    true
),
(
    'Christmas Celebrations', 
    'Spread joy and warmth with enchanting holiday decorations and festive cheer.', 
    'events/IMG2.jpg', 
    'events/IMG2.jpg', 
    2, 
    true
),
(
    'Corporate Events', 
    'Professional excellence meets creative brilliance for all your business networking needs.', 
    'events/IMG3.jpg', 
    'events/IMG3.jpg', 
    3, 
    true
),
(
    'Reception Bliss', 
    'Create memories with elegant setups, perfect ambiance, and grand celebrations.', 
    'events/IMG4.jpg', 
    'events/IMG4.jpg', 
    4, 
    true
),
(
    'Traditional Wedding', 
    'Honor traditions with timeless elegance, cultural beauty, and vibrant rituals.', 
    'events/IMG5.jpg', 
    'events/IMG5.jpg', 
    5, 
    true
),
(
    'Christmas Gifts & Decor', 
    'Transform spaces into winter wonderlands of joy and cheer with premium decor.', 
    'events/IMG6.jpg', 
    'events/IMG6.jpg', 
    6, 
    true
),
(
    'New Year Party', 
    'Ring in fresh beginnings with spectacular celebrations, lights, and music.', 
    'events/IMG7.jpg', 
    'events/IMG7.jpg', 
    7, 
    true
),
(
    'Thanksgiving Gatherings', 
    'Express gratitude with warm, heartfelt gatherings and beautiful seasonal décor.', 
    'events/IMG8.jpg', 
    'events/IMG8.jpg', 
    8, 
    true
),
(
    'Marriage Splendor', 
    'Celebrate eternal love with grandeur, unforgettable moments, and royal themes.', 
    'events/IMG9.jpg', 
    'events/IMG9.jpg', 
    9, 
    true
),
(
    'Get Together Fun', 
    'Bring people together with lively, memorable experiences and cozy vibes.', 
    'events/IMG10.jpg', 
    'events/IMG10.jpg', 
    10, 
    true
);