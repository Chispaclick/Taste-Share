import { configureStore } from "@reduxjs/toolkit";


import { authLoginSlice } from "@/slice/authLoginSlice";
//import  tasteShareSlice  from "@/slice/tasteShareSlice";

export const store = configureStore({
  reducer: {
    auth: authLoginSlice.reducer,
    //tasteshare: tasteShareSlice.reducer,
  },
});
