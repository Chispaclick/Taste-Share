const { createSlice } = require("@reduxjs/toolkit");

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
    logout: (state) => {
      state.status = "not-autheticated";
      state.uid = null;
      state.email = null;
      state.displayName = null;
      state.photoURL = null;
      state.errorMesssage = null;
    },
    checkingCredencials: (state) => {
      state.status = "checking";
    },
  },
});

export const { login, logout, checkingCredencials } = authSlice.actions;
