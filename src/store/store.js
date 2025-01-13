import { configureStore } from "@reduxjs/toolkit";

import tasteShareReducer from "@/slice/tasteshareSlice";
import { authLoginSlice } from "@/slice/authLoginSlice";

export const store = configureStore({
  reducer: {
    auth: authLoginSlice.reducer,
    tasteshare: tasteShareReducer,
  },
});
