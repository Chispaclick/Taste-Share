"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthProvider";

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  if (loading) {
    return <p>Cargando...</p>; // Muestra un mensaje o spinner mientras se verifica el estado
  }

  if (!user) {
    router.push("/login"); // Redirige al login si no está autenticado
    return null;
  }

  return <>{children}</>; // Renderiza el contenido si está autenticado
}