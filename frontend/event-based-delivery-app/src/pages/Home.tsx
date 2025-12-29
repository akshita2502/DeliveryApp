import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../store/store';
import { fetchEvents } from '../slices/eventsSlice';

import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import HeroSlider from '../components/events/HeroSlider';
import EventGrid from '../components/events/EventGrid';
import './Home.css';

const Home: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  
  // Select data from Redux store
  const { items, sliderData, status, error } = useSelector(
    (state: RootState) => state.events
  );

  useEffect(() => {
    // Only fetch if status is 'idle'. 
    // This prevents duplicate API calls in Strict Mode or when navigating back.
    if (status === 'idle') {
      dispatch(fetchEvents());
    }
  }, [status, dispatch]);

  return (
    <div className="home-container">
      <Header />

      {status === 'loading' ? (
        <div style={{ height: '500px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <p>Loading Experience...</p>
        </div>
      ) : status === 'failed' ? (
        <div style={{ padding: '2rem', textAlign: 'center', color: 'red' }}>
          {error}
        </div>
      ) : (
        <>
          {/* Hero Slider */}
          {sliderData.length > 0 && <HeroSlider slides={sliderData} />}

          {/* Modularized Event Grid */}
          <EventGrid title="Browse by Occasion" events={items} />
        </>
      )}

      <Footer />
    </div>
  );
};

export default Home;