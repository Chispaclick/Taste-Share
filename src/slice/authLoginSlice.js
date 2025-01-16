import { createSlice } from "@reduxjs/toolkit";

export const authLoginSlice = createSlice({
  name: 'auth',
  initialState: {
    status: 'checking',
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null
  },
  reducers: {
      login: (state, {payload}) => {
        state.status = 'authenticated';
        state.uid = payload.uid;
        state.email = payload.email;
        state.displayName = payload.displayName;
        state.photoURL = payload.photoURL;
      },
      logout: (state, {payload}) => {
        state.status = 'not-authenticated';
        state.uid = null;
        state.email = null;
        state.displayName = null;
        state.photoURL = null;
        state.errorMessage = payload?.errorMessage;
      },
      checkingCredencials: (state) => {
        state.status = 'checking';
      }
  }
});

export const {
    login,
    logout,
    checkingCredencials
} = authLoginSlice.actions;













































































{/*const { createSlice } = require("@reduxjs/toolkit");

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "not-autheticated", // 'checking', 'not-autheticated', 'autheticated'
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMesssage: null,
  },
  reducers: {
    login: (state, action) => {
      state.status = "autheticated";
      state.uid = action.payload.uid;
      state.email = action.payload.email;
      state.displayName = action.payload.displayName;
      state.photoURL = action.payload.photoURL;
      state.errorMesssage = null;
    },
    logout: (state, payload) => {
      state.status = "not-autheticated";
      state.uid = null;
      state.email = null;
      state.displayName = null;
      state.photoURL = null;
      state.errorMesssage = payload.errorMesssage;
    },
    checkingCredencials: (state) => {
      state.status = "checking";
    },
  },
});

export const { login, logout, checkingCredencials } = authSlice.actions;*/}
