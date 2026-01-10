-- Sample Products Data for Event Products Page
-- Insert sample products for testing the frontend implementation

-- First, ensure you have events in the database
-- These products are linked to the existing events

-- Birthday Bash Products
INSERT INTO products (name, description, actual_price, discounted_price, image_url, category, is_bundle, is_active, stock_count, event_id)
VALUES 
('Gold Balloon Arch Kit', 'Elegant golden balloon arch decoration kit with 100+ balloons', 1500, 1200, 'products/balloons/gold_arch.jpg', 'Decor', false, true, 50, 1),
('LED String Lights (20m)', 'Warm white LED string lights, energy efficient and durable', 800, NULL, 'products/lights/led_string.jpg', 'Lighting', false, true, 75, 1),
('Confetti Cannon Poppers', 'Colorful confetti cannons for celebration moments', 500, 450, 'products/accessories/confetti.jpg', 'Accessories', false, true, 100, 1),
('Birthday Banner Set', 'Reusable metallic birthday banners in multiple colors', 300, NULL, 'products/decor/banner.jpg', 'Decor', false, true, 60, 1),
('Party Hats Pack (10pcs)', 'Assorted colorful party hats for kids and adults', 250, 200, 'products/accessories/party_hats.jpg', 'Accessories', false, true, 150, 1),
('Premium Birthday Cake Stand', 'Elegant three-tier cake display stand', 2000, 1700, 'products/supplies/cake_stand.jpg', 'Supplies', false, true, 30, 1),
('Decoration Complete Bundle', 'Comprehensive party decoration bundle including balloons, lights, and banners', 5000, 3999, 'products/bundles/decoration_bundle.jpg', 'Decor', true, true, 20, 1),
('Photography Backdrop', 'Customizable photo backdrop for party pictures', 1200, 999, 'products/supplies/backdrop.jpg', 'Supplies', false, true, 15, 1);

-- Christmas Celebrations Products
INSERT INTO products (name, description, actual_price, discounted_price, image_url, category, is_bundle, is_active, stock_count, event_id)
VALUES 
('Christmas Tree (6ft)', 'Pre-lit artificial Christmas tree with 600 LED lights', 3500, 2999, 'products/christmas/tree_6ft.jpg', 'Decor', false, true, 20, 2),
('Ornament Set (50pcs)', 'Assorted Christmas ornaments in vibrant colors', 1200, 999, 'products/christmas/ornaments.jpg', 'Decor', false, true, 50, 2),
('LED Icicle Lights', 'Twinkling icicle lights for outdoor/indoor decoration', 700, 599, 'products/lights/icicle.jpg', 'Lighting', false, true, 80, 2),
('Christmas Wreaths', 'Handcrafted festive wreaths with bells and ribbons', 800, 699, 'products/christmas/wreath.jpg', 'Decor', false, true, 40, 2),
('Gift Wrap Roll Pack', 'Premium gift wrap in festive Christmas patterns', 400, 350, 'products/accessories/gift_wrap.jpg', 'Accessories', false, true, 120, 2),
('Festive Table Cloth', 'Red and green Christmas themed table cloth (6-8 seater)', 600, 499, 'products/supplies/table_cloth.jpg', 'Supplies', false, true, 35, 2),
('Complete Christmas Bundle', 'All-in-one Christmas decoration package', 8000, 5999, 'products/bundles/christmas_bundle.jpg', 'Decor', true, true, 15, 2),
('Stocking Hangers Set', 'Decorative stocking hangers for fireplace mantel', 450, 399, 'products/accessories/stocking_hangers.jpg', 'Accessories', false, true, 60, 2);

-- Corporate Events Products
INSERT INTO products (name, description, actual_price, discounted_price, image_url, category, is_bundle, is_active, stock_count, event_id)
VALUES 
('Professional Podium Stand', 'Elegant podium with microphone stand for presentations', 4500, 3999, 'products/corporate/podium.jpg', 'Supplies', false, true, 8, 3),
('Conference Table Setup', 'Rectangular conference table (8-seater)', 12000, 9999, 'products/corporate/conf_table.jpg', 'Supplies', false, true, 5, 3),
('Audio System (Professional)', 'Complete audio system with microphones and speakers', 6000, 5299, 'products/corporate/audio_system.jpg', 'Lighting', false, true, 10, 3),
('Backdrop Banner (Custom)', 'Custom printed corporate backdrop banner', 2500, 2199, 'products/corporate/backdrop.jpg', 'Decor', false, true, 20, 3),
('Name Plates Pack (50)', 'Laser engraved wooden name plates', 2000, 1799, 'products/supplies/name_plates.jpg', 'Supplies', false, true, 15, 3),
('Catering Supplies Kit', 'Complete catering plates, cups, cutlery set', 3000, 2599, 'products/supplies/catering_kit.jpg', 'Supplies', false, true, 25, 3),
('Corporate Event Complete Package', 'Full setup for corporate events with audio, backdrop and supplies', 15000, 11999, 'products/bundles/corporate_bundle.jpg', 'Supplies', true, true, 10, 3),
('Projection Screen (Motorized)', 'Large motorized projection screen for presentations', 8000, 6999, 'products/corporate/projector_screen.jpg', 'Lighting', false, true, 6, 3);

-- Reception Bliss Products
INSERT INTO products (name, description, actual_price, discounted_price, image_url, category, is_bundle, is_active, stock_count, event_id)
VALUES 
('Crystal Chandelier Centerpiece', 'Elegant crystal chandelier for table centerpiece', 3500, 2999, 'products/reception/chandelier.jpg', 'Decor', false, true, 12, 4),
('Silk Flower Arrangements', 'Premium silk flower arrangements with 20+ varieties', 2000, 1699, 'products/reception/flowers.jpg', 'Decor', false, true, 30, 4),
('Elegant Table Linens', 'Premium satin table linens in multiple colors', 1500, 1299, 'products/reception/linens.jpg', 'Supplies', false, true, 50, 4),
('Candle Holders Set (12)', 'Glass candle holders for ambient lighting', 1800, 1499, 'products/reception/candles.jpg', 'Lighting', false, true, 40, 4),
('Charger Plates (100)', 'Gold plated charger plates for elegant dining', 2500, 2099, 'products/reception/charger_plates.jpg', 'Supplies', false, true, 25, 4),
('Ambient LED Lights', 'Warm ambient LED lights for reception ambiance', 1200, 999, 'products/lights/ambient.jpg', 'Lighting', false, true, 20, 4),
('Complete Reception Setup', 'Everything needed for elegant reception setup', 12000, 8999, 'products/bundles/reception_bundle.jpg', 'Decor', true, true, 8, 4),
('Dessert Table Display Stand', 'Three-tier elegant dessert display stand', 1600, 1399, 'products/supplies/dessert_stand.jpg', 'Supplies', false, true, 15, 4);

-- Traditional Wedding Products
INSERT INTO products (name, description, actual_price, discounted_price, image_url, category, is_bundle, is_active, stock_count, event_id)
VALUES 
('Gold Mandap Decoration', 'Traditional mandap with gold ornaments and fabric', 8000, 6999, 'products/wedding/mandap.jpg', 'Decor', false, true, 10, 5),
('Floral Garland (Per meter)', 'Fresh floral garland with jasmine and roses', 500, 449, 'products/wedding/garland.jpg', 'Decor', false, true, 200, 5),
('Diya Sets (Decorative)', 'Hand-painted decorative oil lamps', 800, 699, 'products/wedding/diyas.jpg', 'Decor', false, true, 60, 5),
('Wedding Invitation Cards', 'Premium custom printed wedding cards (100)', 2000, 1699, 'products/supplies/invitations.jpg', 'Supplies', false, true, 30, 5),
('Mehendi Bangles Display', 'Traditional bangles display stand with 200+ bangles', 3000, 2499, 'products/wedding/bangles.jpg', 'Supplies', false, true, 5, 5),
('Bridal Setup Package', 'Complete bridal room setup with cushions and decor', 5000, 4199, 'products/wedding/bridal_setup.jpg', 'Supplies', false, true, 8, 5),
('Traditional Wedding Bundle', 'Complete traditional wedding decoration package', 20000, 15999, 'products/bundles/wedding_bundle.jpg', 'Decor', true, true, 5, 5),
('Photo Frame Props', 'Decorative photo frame props for events', 1200, 999, 'products/supplies/photo_props.jpg', 'Supplies', false, true, 25, 5);

-- Get Together Fun Products
INSERT INTO products (name, description, actual_price, discounted_price, image_url, category, is_bundle, is_active, stock_count, event_id)
VALUES 
('Party Balloons (100pcs)', 'Assorted color balloons perfect for any gathering', 300, 249, 'products/party/balloons.jpg', 'Decor', false, true, 200, 10),
('Disposable Dinnerware Set', 'Premium disposable plates, cups, and napkins', 600, 499, 'products/supplies/dinnerware.jpg', 'Supplies', false, true, 75, 10),
('String Lights (Warm White)', 'Beautiful warm white string lights for ambiance', 700, 599, 'products/lights/string_warm.jpg', 'Lighting', false, true, 50, 10),
('Beverage Dispenser Set', 'Large beverage dispensers for drinks and juices', 1200, 999, 'products/supplies/dispenser.jpg', 'Supplies', false, true, 20, 10),
('Lawn Games Bundle', 'Fun lawn games including cornhole and ring toss', 2500, 2099, 'products/games/lawn_games.jpg', 'Accessories', false, true, 15, 10),
('Seating Arrangement Cushions', 'Comfortable outdoor cushions (Set of 6)', 1500, 1299, 'products/supplies/cushions.jpg', 'Supplies', false, true, 25, 10),
('Complete Party Package', 'All essentials for a fun gathering', 8000, 5999, 'products/bundles/party_bundle.jpg', 'Supplies', true, true, 20, 10),
('Music Speaker System', 'Portable Bluetooth speaker system for music', 1800, 1499, 'products/accessories/speaker.jpg', 'Lighting', false, true, 30, 10);

-- Note: Image URLs are relative paths stored in database
-- Frontend will construct full URLs as: http://localhost:8000/static/{image_url}
-- Ensure these image files exist in the DeliveryApp/data/{product-path} directory

-- Verify insertion
SELECT event_id, category, COUNT(*) as product_count, SUM(CASE WHEN is_bundle THEN 1 ELSE 0 END) as bundle_count
FROM products
GROUP BY event_id, category
ORDER BY event_id, category;

-- Check sample products
SELECT name, actual_price, discounted_price, is_bundle, category, stock_count
FROM products
WHERE is_bundle = true
ORDER BY name;
