import {
  singInWithGoogle,
  registerUserWithEmailPassword,
  LoginWithEmailPassword,
} from "@/firebase/providers";
import { checkingCredencials, logout, login } from "@/slice/authLoginSlice";
import { createUserWithEmailAndPassword } from "firebase/auth";

//Validacion con Login
export const checkingAuthentication = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredencials());
  };
};

//Validacion con Google
export const startGoogleSignIn = () => {
  return async (dispatch) => {
    // Solo llamar una vez
    dispatch(checkingCredencials());
    const result = await singInWithGoogle();
    if (!result.ok) return dispatch(logout(result.errorMessage));

    dispatch(login(result));
  };
};

//
export const startCreatingUserWithEmailPassword = ({
  displayName,
  email,
  password,
}) => {
  return async (dispatch) => {
    dispatch(checkingCredencials());
    const { ok, uid, photoURL, errorMessage } =
      await registerUserWithEmailPassword({ displayName, email, password });
    
    if (!ok) return dispatch(logout({ errorMessage }));
      dispatch(login({ uid, displayName, email, photoURL }));
    
  };
};

//Validacion con Email
export const startLoginWithEmailPassword = ({email,password}) => {
  return async (dispatch) => {
    // Solo llamar una vez
    dispatch(checkingCredencials());
    const result = await LoginWithEmailPassword({email,password});
    if (!result.ok) return dispatch(logout(result));

    dispatch(login(result));
  };
};




{
  /*export const starNewNote = () => {
  return async (dispatch) => {
    console.log("Nueva Nota");
    const newNote = {
      title: "",
      body: "",
      date: new Date().getTime(),
    };
  };
};*/
}
