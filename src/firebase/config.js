import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAB23A4MplW__SHo097A4a_i67MkJqurOo",
  authDomain: "taste-share-784a4.firebaseapp.com",
  projectId: "taste-share-784a4",
  storageBucket: "taste-share-784a4.firebaseapp.com",
  messagingSenderId: "939027888576",
  appId: "1:939027888576:web:34863eb43d68533e807025",
};

// Inicializar Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);

// Configuración de Google Auth
const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider);
    const { displayName, email, photoURL, uid } = result.user;

    return {
      ok: true,
      displayName,
      email,
      photoURL,
      uid,
    };
  } catch (error) {
    const errorMessage = error.message;
    return {
      ok: false,
      errorMessage,
    };
  }
};

// Inicio de sesión con correo y contraseña
export const signInWithEmail = async (email, password) => {
  try {
    const result = await signInWithEmailAndPassword(FirebaseAuth, email, password);
    const { displayName, email: userEmail, uid } = result.user;

    return {
      ok: true,
      displayName,
      userEmail,
      uid,
    };
  } catch (error) {
    const errorMessage = error.message;
    return {
      ok: false,
      errorMessage,
    };
  }
};