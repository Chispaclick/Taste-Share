"use client";

import NavBar from "@/components/navbar/NavBar";
import SlideMain from "@/components/slide-main/SlideMain";
import { useState } from "react";
import { Provider } from "react-redux";
import { store } from '@/store/store';
import FormState from '@/components/form-state/FormState';

export default function ClientComponent({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [loginHidden, setLoginHidden] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const showLogin = () => {
    setLoginHidden(!loginHidden);
  };

  return (
    <>
      <Provider store={store}>
        <FormState /> 
        {/* Barra de navegación  */}
        <NavBar toggleMenu={toggleMenu} showLogin={showLogin} />
        {/* Menú desplegable<Login /> */}
        <SlideMain isOpen={isOpen} />

        {/* Contenido principal */}
        <main>{children}</main>
      </Provider>
    </>
  );
}
