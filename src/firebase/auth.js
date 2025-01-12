import { auth } from "./firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// Función para iniciar sesión con correo y contraseña
export const loginWithEmail = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user; // Retornamos el usuario
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    throw error; // Propagamos el error para manejarlo en el formulario
  }
};

// Función para registrarse con correo y contraseña
export const signUpWithEmail = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user; // Retornamos el usuario
  } catch (error) {
    console.error("Error al registrarse:", error);
    throw error;
  }
};

// Función para iniciar sesión con Google
export const loginWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    return result.user; // Retornamos el usuario
  } catch (error) {
    console.error("Error al iniciar sesión con Google:", error);
    throw error;
  }
};