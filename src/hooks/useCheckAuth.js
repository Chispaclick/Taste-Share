import { FirebaseAuth } from "@/firebase/config";
import { login, logout } from "@/slice/authLoginSlice";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";

function useCheckAuth() {
  const { status } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const router = useRouter(); // Hook para manejar la navegación

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(FirebaseAuth, async (user) => {
      if (!user) {
        dispatch(logout());
        router.push("/log"); // Redirigir al login si no está autenticado
        return;
      }
      const { uid, email, displayName, photoURL } = user || {};
      dispatch(login({ uid, email, displayName, photoURL }));
      router.push("/"); // Redirigir al Home si está autenticado
    });

    // Limpiar suscripción al desmontar
    return () => unsubscribe();
  }, [dispatch, router]);

  return {
    status,
  };
}

export default useCheckAuth;