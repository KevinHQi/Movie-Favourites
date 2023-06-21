import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateCurrentPath } from "../features/routerPath/routerPathSlice";

import NavBar from "../components/NavBar";
import { AppStyle, headerStyle, contentStyle } from "../styles/AppStyle";

function App() {
  let location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log(`location: ${location.pathname}`);
    dispatch(updateCurrentPath(location.pathname));
  }, [location]);

  useEffect(() => {});

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
