import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
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
