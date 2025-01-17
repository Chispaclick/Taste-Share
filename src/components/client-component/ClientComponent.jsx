"use client";

import NavBar from "@/components/navbar/NavBar";
import SlideMain from "@/components/slide-main/SlideMain";
import { useState } from "react";
import { FirebaseAuth } from "@/firebase/config";
import { login, logout } from "@/slice/authLoginSlice";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";

import "@/app/globals.css";

function ClientComponent({ children }) {
  const [state, setState] = useState({
    isOpen: false,
    changeIcon: false,
    formOpen: true,
  });

  const { status } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const router = useRouter(); // Hook para manejar la navegación

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(FirebaseAuth, async (user) => {
      if (!user) {
        dispatch(logout());
      } else {
        const { uid, email, displayName, photoURL } = user;
        dispatch(login({ uid, email, displayName, photoURL }));
      }
    });

    // Limpiar suscripción al desmontar
  }, []);

  const toggleMenu = () => {
    setState((prevState) => ({
      ...prevState,
      isOpen: !prevState.isOpen,
      changeIcon: !prevState.changeIcon,
    }));
  };

  const showLogin = () => {
    setState((prevState) => ({
      ...prevState,
      formOpen: !prevState.formOpen,
    }));
  };

  return (
    <>
      {
        (status ==='authenticated')
      }
      <NavBar toggleMenu={toggleMenu} changeIcon={state.changeIcon} />
      <SlideMain isOpen={state.isOpen} />
      <div>{children}</div>
    </>
  );
}

export default ClientComponent;
