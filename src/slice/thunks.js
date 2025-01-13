import { singInWithGoogle } from "@/firebase/providers";
import { checkingCredencials } from "@/slice/authLoginSlice";

export const checkingAuthentication = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredencials());
  };
};

export const startGoogleSignIn = () => {
  return async (dispatch) => {
    // Solo llamar una vez
    dispatch(checkingCredencials());
    const result = await singInWithGoogle();
    console.log({result})
  };
};

{/*export const starNewNote = () => {
  return async (dispatch) => {
    console.log("Nueva Nota");
    const newNote = {
      title: "",
      body: "",
      date: new Date().getTime(),
    };
  };
};*/}
