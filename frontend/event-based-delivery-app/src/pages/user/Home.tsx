import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchEvents } from "../store/eventsSlice";

import Header from "../components/common/Header/Header";
import Footer from "../components/Footer/Footer";
import EventHero from "../components/Events/EventHero";
import EventCard from "../components/Events/EventCard";

import "./Home.css";

const Home = () => {
  const dispatch = useAppDispatch();
  const { events } = useAppSelector(state => state.events);

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  const sortedEvents = [...events].sort(
    (a, b) => a.display_order - b.display_order
  );

  return (
    <>
      <Header />

      <EventHero event={sortedEvents[0] || null} />

      <section className="events-section">
        <h2>Choose Your Event</h2>
        <div className="events-grid">
          {sortedEvents.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
