import { createSlice } from "@reduxjs/toolkit";

export const movieFavListSlice = createSlice({
  name: "movieFavList",
  initialState: {
    currentFavAmount: 0,
    maxFavAmount: 5,
    favList: [],
    notification: "",
    amountReachMaxMsg: "Your favorate movie list is full!",
    isReachMaxAmount: false,
  },
  reducers: {
    updateWholeFavList: (state, action) => {
      state.favList = action.payload;
      if (state.favList.length === state.maxFavAmount) {
        state.notification = state.amountReachMaxMsg;
        state.isReachMaxAmount = true;
      } else {
        state.notification = "";
        state.isReachMaxAmount = false;
      }
    },
    addToFavList: (state, action) => {
      state.favList.push(action.payload);
      state.currentFavAmount++;
      if (state.favList.length === state.maxFavAmount) {
        state.notification = state.amountReachMaxMsg;
        state.isReachMaxAmount = true;
      } else {
        state.notification = "";
        state.isReachMaxAmount = false;
      }
    },
    removeFromFavList: (state, action) => {
      state.favList = state.favList.filter((movie) => {
        return movie.imdbID !== action.payload.imdbID;
      });
      state.currentFavAmount--;
      state.isReachMaxAmount = false;
      state.notification = "";
    },
  },
});

export const { updateWholeFavList, addToFavList, removeFromFavList } =
  movieFavListSlice.actions;
export default movieFavListSlice.reducer;
