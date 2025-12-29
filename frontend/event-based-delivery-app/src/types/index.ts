export interface Event {
  id: number;
  name: string;
  description: string;
  image_url: string;      
  event_cards_url: string; 
  display_order: number;
}

export interface ApiEvent {
  id: number;
  name: string;
  description: string;
  image_url: string;
  slider_image_url: string;
  display_order: number;
}

// Type for the Hero Slider data derived from ApiEvent
export interface SliderEvent {
  id: number;
  title: string;
  subtitle: string;
  image: string;
}