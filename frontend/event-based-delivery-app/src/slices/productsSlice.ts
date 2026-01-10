import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import type { Product, ProductsState } from '../types';

// Configuration
const API_BASE_URL = "http://localhost:8000";

const initialState: ProductsState = {
  items: [],
  bundledProducts: [],
  filteredProducts: [],
  categories: [],
  priceRange: [0, 10000],
  maxPrice: 10000,
  status: 'idle',
  error: null,
};

export const fetchProductsByEvent = createAsyncThunk(
  'products/fetchByEvent',
  async (eventId: number) => {
    const response = await axios.get<Product[]>(`${API_BASE_URL}/api/v1/products/event/${eventId}`);
    return response.data;
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setFilterByCategories: (state, action: PayloadAction<string[]>) => {
      state.categories = action.payload;
      applyFilters(state);
    },
    setFilterByPriceRange: (state, action: PayloadAction<[number, number]>) => {
      state.priceRange = action.payload;
      applyFilters(state);
    },
    setShowDiscountsOnly: () => {
      // Discount filter is handled in the component, filters still applied via selector
    },
    resetFilters: (state) => {
      state.categories = [];
      state.priceRange = [0, state.maxPrice];
      state.filteredProducts = state.items;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsByEvent.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductsByEvent.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
        
        // Separate bundles from regular products
        state.bundledProducts = action.payload.filter(p => p.is_bundle);
        
        // Extract unique categories
        const uniqueCategories = Array.from(
          new Set(action.payload.map(p => p.category))
        ).sort();
        state.categories = uniqueCategories;
        
        // Calculate max price
        const maxPrice = Math.max(...action.payload.map(p => p.actual_price), 10000);
        state.maxPrice = maxPrice;
        state.priceRange = [0, maxPrice];
        
        // Initialize filtered products
        state.filteredProducts = action.payload;
      })
      .addCase(fetchProductsByEvent.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch products';
      });
  },
});

// Helper function to apply all active filters
function applyFilters(state: ProductsState) {
  let filtered = [...state.items];

  // Filter by categories if any are selected
  if (state.categories.length > 0) {
    filtered = filtered.filter(p => state.categories.includes(p.category));
  }

  // Filter by price range
  filtered = filtered.filter(
    p => p.actual_price >= state.priceRange[0] && p.actual_price <= state.priceRange[1]
  );

  // Check if discount filter is being applied based on the action
  // Note: For discount filter, we'll handle it in the component using a separate flag

  state.filteredProducts = filtered;
}

export const {
  setFilterByCategories,
  setFilterByPriceRange,
  setShowDiscountsOnly,
  resetFilters,
} = productsSlice.actions;

export default productsSlice.reducer;
