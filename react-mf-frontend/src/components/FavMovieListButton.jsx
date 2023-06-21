import { HeartOutlined } from "@ant-design/icons";
import { Button, Tooltip } from "antd";
import { useSelector } from "react-redux";
import { useLinkClickHandler } from "react-router-dom";

import FavMovieListButtonStyle from "../styles/FavMovieListButtonStyle";

const FavMovieListButton = () => {
  const favPagePath = useSelector(
    (state) => state.routerPath.pathToFavMoviePage
  );
  const isLargeScreen = useSelector(
    (state) => state.windowSizeTracker.isOnLargeScreen
  );
  const currentFavAmount = useSelector(
    (state) => state.movieFavList.currentFavAmount
  );
  const maxFavAmount = useSelector((state) => state.movieFavList.maxFavAmount);
  const clickHandler = useLinkClickHandler(favPagePath);

  return (
    <div style={FavMovieListButtonStyle}>
      <HeartOutlined />
      {isLargeScreen && `${currentFavAmount}/${maxFavAmount}`}
    </div>
  );
};

export default FavMovieListButton;
