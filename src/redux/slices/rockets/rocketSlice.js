/* eslint-disable consistent-return */
/* eslint-disable import/no-extraneous-dependencies */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  rockets: [],
};

export const fetchRockets = createAsyncThunk('fetchRockets', async (url) => {
  const { data } = await axios.get(url, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return data;
});

const rocketSlice = createSlice({
  name: 'rocketSlice',
  initialState,
  reducers: {
    reserveRocket: (state, action) => {
      const id = action.payload;
      const newState = { ...state };
      const newRockets = state.rockets.map((rocket) => {
        if (rocket.id !== id) return rocket;
        return { ...rocket, reserved: true };
      });
      newState.rockets = newRockets;
      return newState;
    },
    cancelReservation: (state, action) => {
      const id = action.payload;
      const newState = { ...state };
      const newRockets = state.rockets.map((rocket) => {
        if (rocket.id !== id) return rocket;
        return { ...rocket, reserved: false };
      });
      newState.rockets = newRockets;
      return newState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRockets.fulfilled, (state, action) => {
      const rockets = action.payload;
      const newRockets = rockets.map((rocket) => {
        const {
          flickr_images: flickrImages,
          rocket_id: rocketId,
          rocket_name: rocketName,
          rocket_type: rocketType,
          description,
        } = rocket;
        return {
          id: rocketId,
          name: rocketName,
          type: rocketType,
          flickr_images: flickrImages,
          description,
          reserved: false,
        };
      });
      const newState = { ...state };
      newState.rockets = newRockets;
      return newState;
    });
  },
});

export default rocketSlice.reducer;
export const { reserveRocket, cancelReservation } = rocketSlice.actions;
