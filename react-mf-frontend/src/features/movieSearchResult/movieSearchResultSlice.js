import { createSlice } from "@reduxjs/toolkit";

export const movieSearchResultSlice = createSlice({
  name: "movieSearchResult",
  initialState: {
    resultList: [],
    chosenResultDetail: {},
    OMDbKey: config.OMDB_KEY,
    OMDbUrl: "http://www.omdbapi.com/",
    errorToDisplay: "",
    minLenOfSearchTerm: 3,
    searchTermTooShortErrorMsg: "Provide me at least 3 characters to search!",
    isPending: false,
  },
  reducers: {
    searchMovieByName: (state, action) => {
      if (action.payload.length < state.minLenOfSearchTerm) {
        state.errorToDisplay = state.searchTermTooShortErrorMsg;
        return;
      }

      const serachTerm = encodeURIComponent(action.payload);
      console.log(`search result start fetching...`);
      fetch(`${state.OMDbUrl}?apikey=${state.OMDbKey}&s=${serachTerm}`)
        .then((response) => {
          console.log("Search Response:", response);
          state.isPending = true;
          return response.json();
        })
        .then((data) => {
          console.log("Search data:", data);
          state.isPending = false;
          if (data.Response === "False") {
            state.errorToDisplay = data.Error;
          } else {
            state.resultList = data.Search;
            state.errorToDisplay = "";
          }
        })
        .catch((err) => {
          console.error(err.message);
          state.isPending = false;
          state.errorToDisplay = err.message;
        });
    },
    updateChosenResultDetail: (state, action) => {
      state.chosenResultDetail = action.payload;
    },
  },
});

export const { updateChosenResultDetail, searchMovieByName } =
  movieSearchResultSlice.actions;
export default movieSearchResultSlice.reducer;
