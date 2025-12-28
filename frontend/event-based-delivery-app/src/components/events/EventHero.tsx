import { Event } from "../../types/event";
import "./EventHero.css";

interface Props {
  event: Event | null;
}

const EventHero = ({ event }: Props) => {
  if (!event) return null;

  return (
    <div className="event-hero">
      <img src={event.image_url} alt={event.name} />
      <div className="overlay">
        <h1>{event.name}</h1>
        <p>{event.description}</p>
      </div>
    </div>
  );
};

export default EventHero;
