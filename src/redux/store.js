import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './slices/rockets/rocketSlice';
import missionReducer from './slices/missionSlice/missionSlice';
import menuReducer from './slices/menu/menuSlice';

const store = configureStore({
  reducer: {
    rockets: rocketReducer,
    missions: missionReducer,
    menu: menuReducer,
  },
});

export default store;
