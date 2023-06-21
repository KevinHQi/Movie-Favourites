import { createSlice } from "@reduxjs/toolkit";

export const movieFavListSlice = createSlice({
  name: "movieFavList",
  initialState: {
    currentFavAmount: 0,
    maxFavAmount: 5,
    favList: {},
  },
  reducers: {
    updateWholeFavList: (state, action) => {
      state.favList = action.payload;
    },
    addToFavList: (state, action) => {},
    removeFromFavList: (state, action) => {},
  },
});

export const { updateWholeFavList, addToFavList, removeFromFavList } =
  movieFavListSlice.actions;
export default movieFavListSlice.reducer;
