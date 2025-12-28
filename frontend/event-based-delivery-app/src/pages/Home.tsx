import React, { useEffect, useState } from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import HeroSlider from '../components/events/HeroSlider';
import type { Event } from '../types/index';
import './Home.css';

// Import local assets for the slider
// Note: Ensure these files exist in src/assets/events/
import img1 from '../assets/events/IMG1.jpg';
import img2 from '../assets/events/IMG2.jpg';
import img3 from '../assets/events/IMG3.jpg';
import img4 from '../assets/events/IMG4.jpg';
import img5 from '../assets/events/IMG5.jpg';
import img6 from '../assets/events/IMG6.jpg';
import img7 from '../assets/events/IMG7.jpg';
import img8 from '../assets/events/IMG8.jpg';
import img9 from '../assets/events/IMG9.jpg';
import img10 from '../assets/events/IMG10.jpg';

const Home: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Slider Data Configuration
  const sliderData = [
    { id: 1, image: img1, title: "Birthday Bash", subtitle: "Celebrate in style with unforgettable parties and magical moments." },
    { id: 2, image: img2, title: "Christmas Celebrations", subtitle: "Spread joy and warmth with enchanting holiday decorations." },
    { id: 3, image: img3, title: "Corporate Events", subtitle: "Professional excellence meets creative brilliance for your business." },
    { id: 4, image: img4, title: "Reception Bliss", subtitle: "Create memories with elegant setups and perfect ambiance." },
    { id: 5, image: img5, title: "Traditional Wedding", subtitle: "Honor traditions with timeless elegance and cultural beauty." },
    { id: 6, image: img6, title: "Christmas Gifts & Decor", subtitle: "Transform spaces into winter wonderlands of joy and cheer." },
    { id: 7, image: img7, title: "New Year Party", subtitle: "Ring in fresh beginnings with spectacular celebrations." },
    { id: 8, image: img8, title: "Thanksgiving Gatherings", subtitle: "Express gratitude with warm, heartfelt gatherings and décor." },
    { id: 9, image: img9, title: "Marriage Splendor", subtitle: "Celebrate eternal love with grandeur and unforgettable moments." },
    { id: 10, image: img10, title: "Get Together Fun", subtitle: "Bring people together with lively, memorable experiences." }
  ];

  // Simulating API Fetch for Grid Cards (Browse by Occasion)
  useEffect(() => {
    const fetchEvents = async () => {
      // Mock Data for the grid below the slider
      const mockData: Event[] = [
        {
          id: 1,
          name: "Birthday",
          description: "Celebrate with fun themes, custom cakes, and vibrant decorations.",
          image_url: img1, 
          event_cards_url: img1,
          display_order: 1
        },
        {
          id: 2,
          name: "Wedding & Reception",
          description: "Create timeless memories with elegant setups and grand celebrations.",
          image_url: img5,
          event_cards_url: img4,
          display_order: 2
        },
        {
          id: 3,
          name: "Christmas & New Year",
          description: "Festive cheer with enchanting holiday décor and New Year sparkle.",
          image_url: img2,
          event_cards_url: img2,
          display_order: 3
        },
        {
          id: 4,
          name: "Get-together",
          description: "Bring loved ones closer with warm, memorable gatherings.",
          image_url: img10,
          event_cards_url: img10,
          display_order: 4
        },
        {
          id: 5,
          name: "Diwali",
          description: "Celebrate the festival of lights with traditional décor and warmth.",
          image_url: img7,
          event_cards_url: img7,
          display_order: 5
        },
        {
          id: 6,
          name: "Corporate Events",
          description: "Professional excellence with creative setups for your business needs.",
          image_url: img3,
          event_cards_url: img3,
          display_order: 6
        }
      ];

      setTimeout(() => {
        setEvents(mockData.sort((a, b) => a.display_order - b.display_order));
        setLoading(false);
      }, 500);
    };

    fetchEvents();
  }, []);

  return (
    <div className="home-container">
      <Header />

      {/* Hero Slider Section replaces the static featuredEvent */}
      <HeroSlider slides={sliderData} />

      <section className="events-grid-section">
        <h2 className="section-title">Browse by Occasion</h2>
        {loading ? (
          <p>Loading categories...</p>
        ) : (
          <div className="events-grid">
            {events.map((event) => (
              <div key={event.id} className="event-card">
                <div className="card-image-wrapper">
                  <img 
                    src={event.event_cards_url} 
                    alt={event.name} 
                    loading="lazy" 
                  />
                </div>
                <div className="card-content">
                  <h3 className="card-title">{event.name}</h3>
                  <p className="text-secondary text-small">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
};

export default Home;