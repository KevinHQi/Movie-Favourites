import { configureStore } from "@reduxjs/toolkit";

import routerPathSlice from "../features/routerPath/routerPathSlice";
import movieSearchResultSlice from "../features/movieSearchResult/movieSearchResultSlice";
import movieFavListSlice from "../features/movieFavList/movieFavListSlice";

export default configureStore({
  reducer: {
    routerPath: routerPathSlice,
    movieSearchResult: movieSearchResultSlice,
    movieFavList: movieFavListSlice,
  },
});
