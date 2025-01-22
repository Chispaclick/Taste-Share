//Este archivo se llama firebase.js
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1vjr4Yrv1ximwo7JKqtFtV2ARgzVLIc8",
  authDomain: "taste-share-storage.firebaseapp.com",
  projectId: "taste-share-storage",
  storageBucket: "taste-share-storage.firebasestorage.app",
  messagingSenderId: "332015916897",
  appId: "1:332015916897:web:c8e2591066b6c504265720"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
