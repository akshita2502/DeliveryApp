export interface Event {
  id: number;
  name: string;
  description: string;
  image_url: string;      // For details component
  event_cards_url: string; // For card component
  display_order: number;
}