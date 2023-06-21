import { useSelector, useDispatch } from "react-redux";
import { Col, Row, Space, Image, Skeleton } from "antd";
import { useEffect } from "react";

import {
  MovieHorizListStyle,
  MovieTileStyle,
  MovieTileChosenStyle,
} from "../styles/MovieHorizListStyle";
import { updateChosenResultDetail } from "../features/movieSearchResult/movieSearchResultSlice";

const MovieHorizList = () => {
  const movieList = useSelector((state) => state.movieSearchResult.resultList);
  const chosenMovie = useSelector(
    (state) => state.movieSearchResult.chosenResultDetail
  );
  const dispatch = useDispatch();

  const handleChooseMovie = (movie) => {
    dispatch(updateChosenResultDetail(movie));
  };

  return (
    <Row style={MovieHorizListStyle}>
      {movieList.map((movie) => {
        return (
          <div
            style={
              movie.imdbID !== chosenMovie.imdbID
                ? MovieTileStyle
                : MovieTileChosenStyle
            }
            key={movie.imdbID}
            onClick={() => handleChooseMovie(movie)}
          >
            {movie.Poster !== "N/A" ? (
              <Image
                src={movie.Poster}
                width="calc(100vw / 10 - 20px)"
                height="calc((100vh * 0.3 - 20px) * 0.75)"
                style={{ objectFit: "cover" }}
                preview={false}
              />
            ) : (
              <Skeleton.Image
                style={{
                  width: "calc(100vw / 10 - 20px)",
                  height: "calc((100vh * 0.3 - 20px) * 0.75)",
                }}
              />
            )}
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
