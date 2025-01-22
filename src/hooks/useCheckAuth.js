import { FirebaseAuth } from "@/firebase/config";
import { login, logout } from "@/slice/authLoginSlice";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { startLoadingNotes } from "@/share/thunks";

function useCheckAuth() {

  const { status } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const router = useRouter(); // Hook para manejar la navegación

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(FirebaseAuth, async (user) => {
      if (!user) {
        dispatch(logout())
      }
      else{
        const {uid, email, displayName, photoURL} = user;
        dispatch(login({uid, email, displayName, photoURL}))
        dispatch(startLoadingNotes())
      }
  
    });

    // Limpiar suscripción al desmontar
    ;
  }, []);

  return {
    
  };
}

export default useCheckAuth;