import { useSelector, useDispatch } from "react-redux";
import { Col, Row, Space } from "antd";
import { useEffect } from "react";

import MovieHorizListStyle from "../styles/MovieHorizListStyle";
import { updateChosenResultDetail } from "../features/movieSearchResult/movieSearchResultSlice";

const MovieHorizList = () => {
  const movieList = useSelector((state) => state.movieSearchResult.resultList);
  const windowWidth = useSelector((state) => state.windowSizeTracker.width);
  const windowHeight = useSelector((state) => state.windowSizeTracker.height);
  const dispatch = useDispatch();

  const handleChooseMovie = (movie) => {
    dispatch(updateChosenResultDetail(movie));
  };

  useEffect(() => {
    dispatch(updateChosenResultDetail(movieList[0]));
  }, [movieList]);

  return (
    <Row style={MovieHorizListStyle}>
      {movieList.map((movie) => {
        return (
          <div
            style={{
              width: windowWidth / 10 - 20,
              height: windowHeight * 0.3 * 0.9,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: "10px",
              cursor: "pointer",
            }}
            key={movie.imdbID}
            onClick={() => handleChooseMovie(movie)}
          >
            <img
              src={movie.Poster}
              width={windowWidth / 10 - 20}
              height={windowHeight * 0.3 * 0.8}
              style={{ objectFit: "cover" }}
            />
            <p>
              {movie.Title.length < 40
                ? movie.Title
                : movie.Title.slice(0, 40) + "..."}
            </p>
          </div>
        );
      })}
    </Row>
  );
};

export default MovieHorizList;
