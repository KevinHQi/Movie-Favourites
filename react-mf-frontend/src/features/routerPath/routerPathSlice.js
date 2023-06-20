import { createSlice } from "@reduxjs/toolkit";

export const routerPathSlice = createSlice({
  name: "routerPath",
  initialState: {
    pathToHomePage: "",
    pathToMovieSearchPage: "/search",
    pathToFavMoviePage: "/fav",
  },
  reducers: {},
});

export default routerPathSlice.reducer;
