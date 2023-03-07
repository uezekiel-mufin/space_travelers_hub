import { createAsyncThunk } from '@reduxjs/toolkit';
import { loadMission } from '../missionSlice/missionSlice';

const LOAD_MISSION = 'LOADMISSION';
const missionUrl = 'https://api.spacexdata.com/v3/missions';

const asyncMission = createAsyncThunk(
  LOAD_MISSION,
  async (_, thunkAPI) => {
    const response = await fetch(missionUrl, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const data = await response.json();
    thunkAPI.dispatch(loadMission(data));
    return data;
  },
);

export default asyncMission;
