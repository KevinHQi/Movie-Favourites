import { Link } from "react-router-dom";
import { Col, Row } from "antd";
import { AppstoreOutlined, MailOutlined } from "@ant-design/icons";

import NavBarStyle from "../styles/NavBarStyle";
import SearchBar from "./SearchBar";
import FavMovieListButton from "./FavMovieListButton";
import HomeIconButton from "./HomeIconButton";

const items = [
  {
    label: <Link to={`/`} />,
    key: "mail",
    icon: <MailOutlined />,
  },
  {
    label: <Link to={`fav`} />,
    key: "app",
    icon: <AppstoreOutlined />,
  },
];

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
      <Col span={3}></Col>
      <Col span={4}>
        <FavMovieListButton />
      </Col>
      <Col span={2}>
        <button>Button 2</button>
      </Col>
    </Row>
  );
};

export default NavBar;
