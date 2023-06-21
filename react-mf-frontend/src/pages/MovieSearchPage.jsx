import { useSelector } from "react-redux";
import { notification } from "antd";
import { useEffect } from "react";

import MovieDetail from "../components/MovieDetail";
import MovieHorizList from "../components/MovieHorizList";
import MovieSearchErrorDisplay from "../components/MovieSearchErrorDisplay";
import { MovieSearchPageStyle } from "../styles/MovieSearchPageStyle";

const MovieSearchPage = () => {
  const searchError = useSelector(
    (state) => state.movieSearchResult.errorToDisplay
  );
  const isPending = useSelector((state) => state.movieSearchResult.isPending);
  const movieList = useSelector((state) => state.movieSearchResult.resultList);
  const errorToDisplay = useSelector(
    (state) => state.movieSearchResult.errorToDisplay
  );
  const chosenMovieObj = useSelector(
    (state) => state.movieSearchResult.chosenResultDetail
  );

  const favListNotification = useSelector(
    (state) => state.movieFavList.notification
  );
  const [api, contextHolder] = notification.useNotification();

  useEffect(() => {
    if (favListNotification !== "") {
      api["warning"]({
        message: favListNotification,
      });
    }
  }, [favListNotification]);

  return (
    <div>
      {contextHolder}
      {searchError === "" ? (
        <div>
          <div style={{ height: "calc(100vh - 100vh * 0.3 - 70px)" }}>
            {chosenMovieObj != {} && <MovieDetail />}
          </div>
          <div style={{ height: "calc(100vh * 0.3)" }}>
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
