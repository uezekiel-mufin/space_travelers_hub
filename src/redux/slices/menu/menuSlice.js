import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  menuBar: false,
};

export const menuSlice = createSlice({
  name: 'menuSlice',
  initialState,
  reducers: {
    openMenu: (state) => {
      const newState = { ...state };
      newState.menuBar = true;
      return newState;
    },
    closeMenu: (state) => {
      const newState = { ...state };
      newState.menuBar = false;
      return newState;
    },
  },
});

export const { openMenu, closeMenu } = menuSlice.actions;
export default menuSlice.reducer;
