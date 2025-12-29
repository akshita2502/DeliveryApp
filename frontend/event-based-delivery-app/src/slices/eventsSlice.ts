import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import type { Event, ApiEvent, SliderEvent } from '../types';

// Configuration
const API_BASE_URL = "http://localhost:8000";
const API_STATIC_URL = `${API_BASE_URL}/static`;

interface EventsState {
  items: Event[];
  sliderData: SliderEvent[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: EventsState = {
  items: [],
  sliderData: [],
  status: 'idle',
  error: null,
};

export const fetchEvents = createAsyncThunk('events/fetchEvents', async () => {
  const response = await axios.get<ApiEvent[]>(`${API_BASE_URL}/api/v1/events/`);
  return response.data;
});

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEvents.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchEvents.fulfilled, (state, action: PayloadAction<ApiEvent[]>) => {
        state.status = 'succeeded';
        const data = action.payload;

        // 1. Process Grid Data
        state.items = data.map((evt) => ({
          id: evt.id,
          name: evt.name,
          description: evt.description || "",
          image_url: evt.image_url ? `${API_STATIC_URL}/${evt.image_url}` : "",
          event_cards_url: evt.image_url ? `${API_STATIC_URL}/${evt.image_url}` : "",
          display_order: evt.display_order,
        }));

        // 2. Process Slider Data
        state.sliderData = data
          .filter((evt) => evt.slider_image_url)
          .map((evt) => ({
            id: evt.id,
            title: evt.name,
            subtitle: evt.description,
            image: `${API_STATIC_URL}/${evt.slider_image_url}`,
          }));
      })
      .addCase(fetchEvents.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch events';
      });
  },
});

export default eventsSlice.reducer;