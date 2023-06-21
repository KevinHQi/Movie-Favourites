import { useSelector } from "react-redux";

import MovieDetail from "../components/MovieDetail";
import MovieHorizList from "../components/MovieHorizList";
import MovieSearchErrorDisplay from "../components/MovieSearchErrorDisplay";
import { MovieSearchPageStyle } from "../styles/MovieSearchPageStyle";

const MovieSearchPage = () => {
  const searchError = useSelector(
    (state) => state.movieSearchResult.errorToDisplay
  );
  const windowHeight = useSelector((state) => state.windowSizeTracker.height);

  return (
    <div>
      {searchError === "" ? (
        <div>
          <div style={{ height: windowHeight - windowHeight * 0.3 - 70 }}>
            <MovieDetail />
          </div>
          <div style={{ height: windowHeight * 0.3 }}>
            <MovieHorizList />
          </div>
        </div>
      ) : (
        <MovieSearchErrorDisplay />
      )}
    </div>
  );
};

export default MovieSearchPage;
