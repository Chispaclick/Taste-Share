import { configureStore } from "@reduxjs/toolkit";
import { authLoginSlice } from "@/slice/authLoginSlice";
import { notificatiosSlice } from "@/slices/notificatios-slice/NotificatiosSlice";
//import { shareSlice } from "@/share/shareSlice";
//import  tasteShareSlice  from "@/slice/tasteShareSlice";

export const store = configureStore({
  reducer: {
    auth: authLoginSlice.reducer,
    notifications: notificatiosSlice.reducer
    //share: shareSlice.reducer,
    //tasteshare: tasteShareSlice.reducer,
  },
});
