import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './rucketSlice';

const store = configureStore({
  reducer: {
    rockets: rocketReducer,
  },
});

export default store;
