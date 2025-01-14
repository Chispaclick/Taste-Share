import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider);
    // const credentials = GoogleAuthProvider.credentialFromResult(result)
    const { uid, email, displayName, photoURL, errorMessage } = result.user;

    return {
      ok: true,
      uid,
      email,
      displayName,
      photoURL,
      errorMessage,
    };
  } catch (error) {
    console.log(error);
    return {
        ok: false,
    }
  }
};


//Valivacion con Gmail
export const registerUserWithEmailPassword = async ({
  displayName,
  email,
  password,
}) => {
  try {
   console.log(email, password, displayName)
   const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password)
   const {uid, photoURL} = resp.user;
   //TODO: actualizar el displayName en Firebase
   await updateProfile(FirebaseAuth.currentUser, {displayName})
   console.log(resp)
  } catch (error) {
    console.log(error);
    return {
      ok: false, errorMessage: error.message,
    };
  }
};

// Email
export const LoginWithEmailPassword = async ({
  email,
  password,
}) => {

  try {
    console.log(email, password, displayName)
    const resp = await signInWithEmailAndPassword (FirebaseAuth, email, password)
    const {uid, photoURL, displayName} = resp.user;
    console.log(resp)
    return {
      ok: true,
      uid, photoURL, displayName
    }
   } catch (error) {
     console.log(error);
     return {
       ok: false, errorMessage: error.message,
     };
   }
}