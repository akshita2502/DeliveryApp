import { configureStore } from '@reduxjs/toolkit';
import eventsReducer from '../slices/eventsSlice';

export const store = configureStore({
  reducer: {
    events: eventsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;