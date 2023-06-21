import { Col, Row } from "antd";
import { useSelector } from "react-redux";

import NavBarStyle from "../styles/NavBarStyle";
import SearchBar from "./SearchBar";
import FavMovieListButton from "./FavMovieListButton";
import HomeIconButton from "./HomeIconButton";

const NavBar = () => {
  const isLargeScreen = useSelector(
    (state) => state.windowSizeTracker.isOnLargeScreen
  );
  return (
    <>
      {isLargeScreen ? (
        <Row style={NavBarStyle}>
          <Col span={1}></Col>
          <Col span={7}>
            <HomeIconButton />
          </Col>
          <Col span={8}>
            <SearchBar />
          </Col>
          <Col span={7}>
            <FavMovieListButton />
          </Col>
          <Col span={1}></Col>
        </Row>
      ) : (
        <Row style={NavBarStyle}>
          <Col span={4}>
            <HomeIconButton />
          </Col>
          <Col span={16}>
            <SearchBar />
          </Col>
          <Col span={4}>
            <FavMovieListButton />
          </Col>
        </Row>
      )}
    </>
  );
};

export default NavBar;
