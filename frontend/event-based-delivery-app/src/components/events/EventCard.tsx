import { Event } from "../../types/event";
import "./EventCard.css";

interface Props {
  event: Event;
}

const EventCard = ({ event }: Props) => {
  return (
    <div className="event-card">
      <img src={event.event_cards_url} alt={event.name} />
      <h3>{event.name}</h3>
    </div>
  );
};

export default EventCard;
