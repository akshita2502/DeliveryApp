import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../store/store';
import { fetchEvents } from '../slices/eventsSlice';

// Header/Footer removed (Handled by Layout)
import HeroSlider from '../components/events/HeroSlider';
import EventGrid from '../components/events/EventGrid';
import './Home.css';

const Home: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items, sliderData, status, error } = useSelector(
    (state: RootState) => state.events
  );

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchEvents());
    }
  }, [status, dispatch]);

  return (
    <div className="home-container">
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

          {/* Event Grid */}
          <EventGrid title="Browse by Occasion" events={items} />
        </>
      )}
    </div>
  );
};

export default Home;