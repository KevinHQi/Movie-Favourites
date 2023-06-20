import { createSlice } from "@reduxjs/toolkit";

export const routerPathSlice = createSlice({
  name: "routerPath",
  initialState: {
    pathToHomePage: "/",
    pathToMovieSearchPage: "/search",
    pathToFavMoviePage: "/fav",
    currentPath: "/",
  },
  reducers: {
    updateCurrentPath: (state, action) => {
      state.currentPath = action.payload;
    },
  },
});

export const { updateCurrentPath } = routerPathSlice.actions;
export default routerPathSlice.reducer;
