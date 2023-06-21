import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { useDispatch, useSelector } from "react-redux";

const fetchMovieListByName = createAsyncThunk(
  "movieSearchResult/fetchMovieListByName",
  (serachTerm, { getState }) => {
    const currentState = getState().movieSearchResult;
    if (serachTerm.length < currentState.minLenOfSearchTerm) {
      throw new Error(
        `Provide me at least ${currentState.minLenOfSearchTerm} characters to search!`
      );
    }

    const escapedSerachTerm = encodeURIComponent(serachTerm);

    console.log(`search result start fetching...`);
    return fetch(
      `${currentState.OMDbUrl}?apikey=${currentState.OMDbKey}&s=${escapedSerachTerm}&type=movie`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return data;
      });
  }
);

export const movieSearchResultSlice = createSlice({
  name: "movieSearchResult",
  initialState: {
    resultList: [],
    chosenResultDetail: {},
    OMDbKey: config.OMDB_KEY,
    OMDbUrl: "http://www.omdbapi.com/",
    errorToDisplay: "No search input",
    minLenOfSearchTerm: 3,
    isPending: false,
  },
  reducers: {
    updateChosenResultDetail: (state, action) => {
      state.chosenResultDetail = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMovieListByName.pending, (state) => {
      state.isPending = true;
    });
    builder.addCase(fetchMovieListByName.fulfilled, (state, action) => {
      state.isPending = false;
      console.log(action.payload);
      if (action.payload.Response === "True") {
        state.errorToDisplay = "";
        state.resultList = action.payload.Search;
        state.chosenResultDetail = state.resultList[0];
      } else {
        state.errorToDisplay = action.payload.Error;
        state.resultList = [];
      }
    });
    builder.addCase(fetchMovieListByName.rejected, (state, action) => {
      state.isPending = false;
      state.resultList = [];
      state.errorToDisplay = action.error.message;
      console.log(action.error.message);
    });
  },
});

export const { updateChosenResultDetail } = movieSearchResultSlice.actions;
export { fetchMovieListByName };
export default movieSearchResultSlice.reducer;
