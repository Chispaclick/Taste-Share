"use client";

import NavBar from "@/components/navbar/NavBar";
import SlideMain from "@/components/slide-main/SlideMain";
import { useState } from "react";
import "@/app/globals.css";

function ClientComponent({ children }) {
  const [state, setState] = useState({
    isOpen: false,
    changeIcon: false,
    formOpen: true,
  });

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
      <NavBar toggleMenu={toggleMenu} changeIcon={state.changeIcon} />
      <SlideMain isOpen={state.isOpen} />
      <div>{children}</div>
    </>
  );
}

export default ClientComponent;
