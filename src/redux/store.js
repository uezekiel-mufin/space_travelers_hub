import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './slices/missionSlice/missionSlice';

const store = configureStore({
  reducer: {
    rockets: rocketReducer,
  },
});

export default store;
