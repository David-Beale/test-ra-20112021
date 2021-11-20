import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  open: false,
};
const favourites = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    toggleOpen(state) {
      state.open = !state.open;
    },
  },
});

export const { toggleOpen } = favourites.actions;

export default favourites.reducer;
