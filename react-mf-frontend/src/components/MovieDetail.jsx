import { Col, Row, Image, Skeleton, Button, Divider } from "antd";
import { useSelector, useDispatch } from "react-redux";

import { MovieDetailStyle, ColContentStyle } from "../styles/MovieDetailStyle";
import {
  addToFavList,
  removeFromFavList,
} from "../features/movieFavList/movieFavListSlice";

const MovieDetail = () => {
  const dispatch = useDispatch();
  const chosenMovieObj = useSelector(
    (state) => state.movieSearchResult.chosenResultDetail
  );
  const FavList = useSelector((state) => state.movieFavList.favList);
  const isReachMaxAmount = useSelector(
    (state) => state.movieFavList.isReachMaxAmount
  );

  const handleAddToFavList = () => {
    dispatch(addToFavList(chosenMovieObj));
  };

  const handleRemoveFromFavList = () => {
    dispatch(removeFromFavList(chosenMovieObj));
  };

  return (
    <Row>
      <Col span={8}>
        <div style={ColContentStyle}>
          <p>{chosenMovieObj.Title}</p>
          <p style={{ fontSize: "30px" }}>{chosenMovieObj.Year}</p>
          <Divider />
          {FavList.filter((movie) => movie.imdbID === chosenMovieObj.imdbID)
            .length > 0 ? (
            <Button onClick={handleRemoveFromFavList} ghost={true} size="large">
              Remove
            </Button>
          ) : (
            <Button
              style={{ color: isReachMaxAmount && "gray" }}
              onClick={handleAddToFavList}
              ghost={true}
              size="large"
              disabled={isReachMaxAmount}
            >
              Save
            </Button>
          )}
        </div>
      </Col>
      <Col span={16}>
        {chosenMovieObj.Poster !== "N/A" ? (
          <Image
            src={chosenMovieObj.Poster.replace("SX300", "SX1000")}
            width="100%"
            height="calc(100vh * 0.7 - 70px)"
            style={{ objectFit: "cover" }}
            preview={false}
          />
        ) : (
          <Skeleton.Image
            style={{
              width: "calc(100vw * (16 / (16 + 8)))",
              height: "calc(100vh * 0.7 - 70px)",
            }}
          />
        )}
      </Col>
    </Row>
  );
};

export default MovieDetail;
