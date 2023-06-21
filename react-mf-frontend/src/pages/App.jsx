import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateCurrentPath } from "../features/routerPath/routerPathSlice";
import { updateWindowSize } from "../features/windowSizeTracker/windowSizeTrackerSlice";

import NavBar from "../components/NavBar";
import { AppStyle, headerStyle, contentStyle } from "../styles/AppStyle";

function App() {
  let location = useLocation();
  const dispatch = useDispatch();

  // track current router path
  useEffect(() => {
    // console.log(`location: ${location.pathname}`);
    dispatch(updateCurrentPath(location.pathname));
  }, [location]);

  // track screen size
  useEffect(() => {
    function handleResize() {
      dispatch(updateWindowSize([window.innerWidth, window.innerHeight]));
    }
    window.addEventListener("resize", handleResize);
    dispatch(updateWindowSize([window.innerWidth, window.innerHeight]));
  });

  return (
    <div style={AppStyle}>
      <div style={headerStyle}>
        <NavBar />
      </div>
      <div style={contentStyle}>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
