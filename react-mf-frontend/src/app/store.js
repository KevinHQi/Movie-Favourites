import { configureStore } from "@reduxjs/toolkit";

import routerPathSlice from "../features/routerPath/routerPathSlice";

export default configureStore({
  reducer: {
    routerPath: routerPathSlice,
  },
});
