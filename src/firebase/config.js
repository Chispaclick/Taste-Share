import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB1vjr4Yrv1ximwo7JKqtFtV2ARgzVLIc8",
  authDomain: "taste-share-storage.firebaseapp.com",
  projectId: "taste-share-storage",
  storageBucket: "taste-share-storage.firebasestorage.app",
  messagingSenderId: "332015916897",
  appId: "1:332015916897:web:c8e2591066b6c504265720"
};

// Inicializar Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);

