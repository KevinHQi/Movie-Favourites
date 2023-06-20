import { Outlet } from "react-router-dom";
import { Layout } from "antd";
const { Header, Footer, Sider, Content } = Layout;

import NavBar from "../components/NavBar";
import { AppStyle, headerStyle, contentStyle } from "../styles/AppStyle";

function App() {
  return (
    <div style={AppStyle}>
      <Layout>
        <div style={headerStyle}>
          <NavBar />
        </div>
        <div style={contentStyle}>
          <Outlet />
        </div>
      </Layout>
    </div>
  );
}

export default App;
