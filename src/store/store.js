import { configureStore } from "@reduxjs/toolkit";
import { authLoginSlice } from "@/slice/authLoginSlice";
//import { shareSlice } from "@/share/shareSlice";
//import  tasteShareSlice  from "@/slice/tasteShareSlice";

export const store = configureStore({
  reducer: {
    auth: authLoginSlice.reducer,
    //share: shareSlice.reducer,
    //tasteshare: tasteShareSlice.reducer,
  },
});
