import { HomeOutlined } from "@ant-design/icons";
import { Button, Tooltip } from "antd";
import { useSelector } from "react-redux";
import { useLinkClickHandler } from "react-router-dom";

import HomeIconButtonStyle from "../styles/HomeIconButtonStyle";

const HomeIconButton = () => {
  const homePagePath = useSelector((state) => state.routerPath.pathToHomePage);
  const clickHandler = useLinkClickHandler(homePagePath);

  return (
    <Tooltip title="Back to home">
      <Button type="link" onClick={clickHandler} style={HomeIconButtonStyle}>
        <HomeOutlined />
      </Button>
    </Tooltip>
  );
};

export default HomeIconButton;
