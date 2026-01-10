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

export interface SliderEvent {
  id: number;
  title: string;
  subtitle: string;
  image: string;
}

// Types for Product Page
export interface Product {
  id: number;
  name: string;
  description?: string;
  actual_price: number;
  discounted_price?: number;
  image_url: string;
  category: string;
  is_bundle: boolean;
  is_active: boolean;
  stock_count: number;
  event_id: number;
}

export interface SortOption {
  value: string;
  label: string;
}

export interface FilterOptions {
  categories: string[];
  priceRange: [number, number];
  showDiscountsOnly: boolean;
}

export interface ProductsState {
  items: Product[];
  bundledProducts: Product[];
  filteredProducts: Product[];
  categories: string[];
  priceRange: [number, number];
  maxPrice: number;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}