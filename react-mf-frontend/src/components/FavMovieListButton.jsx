import { HeartOutlined } from "@ant-design/icons";
import { Button, Tooltip } from "antd";
import { useSelector } from "react-redux";
import { useLinkClickHandler } from "react-router-dom";

import FavMovieListButtonStyle from "../styles/FavMovieListButtonStyle";

const FavMovieListButton = () => {
  const favPagePath = useSelector(
    (state) => state.routerPath.pathToFavMoviePage
  );
  const clickHandler = useLinkClickHandler(favPagePath);

  return (
    <Tooltip title="Find out your favorates!">
      <Button
        style={FavMovieListButtonStyle}
        icon={<HeartOutlined />}
        type="link"
        onClick={clickHandler}
      >
        {0 + "/" + 5}
      </Button>
    </Tooltip>
  );
};

export default FavMovieListButton;
