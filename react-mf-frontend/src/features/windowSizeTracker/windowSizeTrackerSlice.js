import { createSlice } from "@reduxjs/toolkit";

export const windowSizeTrackerSlice = createSlice({
  name: "windowSizeTracker",
  initialState: {
    width: 0,
    height: 0,
    isOnLargeScreen: true,
    widthBreakPoint: 800,
  },
  reducers: {
    updateWindowSize: (state, action) => {
      [state.width, state.height] = action.payload;
      if (state.width < state.widthBreakPoint) {
        state.isOnLargeScreen = false;
      } else {
        state.isOnLargeScreen = true;
      }
    },
  },
});

export const { updateWindowSize } = windowSizeTrackerSlice.actions;
export default windowSizeTrackerSlice.reducer;
