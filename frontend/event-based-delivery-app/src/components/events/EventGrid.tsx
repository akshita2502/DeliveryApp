import React from 'react';
import type { Event } from '../../types';
import './EventGrid.css';

interface EventGridProps {
  title: string;
  events: Event[];
}

const EventGrid: React.FC<EventGridProps> = ({ title, events }) => {
  return (
    <section className="events-grid-section">
      <h2 className="section-title">{title}</h2>
      <div className="events-grid">
        {events.map((event) => (
          <div key={event.id} className="event-card">
            <div className="card-image-wrapper">
              <img
                src={event.event_cards_url}
                alt={event.name}
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'https://via.placeholder.com/400x300?text=No+Image';
                }}
              />
            </div>
            <div className="card-content">
              <h3 className="card-title">{event.name}</h3>
              <p className="text-secondary text-small">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventGrid;