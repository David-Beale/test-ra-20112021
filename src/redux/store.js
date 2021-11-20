import { configureStore } from "@reduxjs/toolkit";

import favourites from "./favourites";

export default configureStore({
  reducer: {
    favourites,
  },
});
