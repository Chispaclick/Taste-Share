"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from "@/firebase/config"; // Ajusta la importación según tu configuración de Firebase

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // Estado del usuario
  const [loading, setLoading] = useState(true); // Estado de carga

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(FirebaseAuth, (currentUser) => {
      setUser(currentUser);
      setLoading(false); // Detenemos la carga cuando se obtiene el estado del usuario
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext); // Hook para acceder al contexto de autenticación
}