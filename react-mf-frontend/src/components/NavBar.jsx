import { Col, Row } from "antd";

import NavBarStyle from "../styles/NavBarStyle";
import SearchBar from "./SearchBar";
import FavMovieListButton from "./FavMovieListButton";
import HomeIconButton from "./HomeIconButton";

const NavBar = () => {
  return (
    <Row style={NavBarStyle}>
      <Col span={2}>
        <HomeIconButton />
      </Col>
      <Col span={7}></Col>
      <Col span={6}>
        <SearchBar />
      </Col>
      <Col span={7}></Col>
      <Col span={2}>
        <FavMovieListButton />
      </Col>
    </Row>
  );
};

export default NavBar;
