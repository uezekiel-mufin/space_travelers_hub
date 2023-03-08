import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './slices/rockets/rocketSlice';
import missionReducer from './slices/missionSlice/missionSlice';

const store = configureStore({
  reducer: {
    rockets: rocketReducer,
    missions: missionReducer,
  },
});

export default store;
