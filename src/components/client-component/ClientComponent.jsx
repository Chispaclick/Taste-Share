"use client";

import NavBar from "@/components/navbar/NavBar";
import SlideMain from "@/components/slide-main/SlideMain";
import {  useState } from "react";
import HookForm from "@/components/hook-form/HookForm";
import "@/app/globals.css";
import { CircularProgress } from "@mui/material";
import useCheckAuth from "@/hooks/useCheckAuth";

function ClientComponent({ children }) {


  const [state, setState] = useState({
    isOpen: false,
    changeIcon: false,
    formOpen: true,
  });

  const {status} = useCheckAuth()
  if (status === "checking") {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "#101011", color: "#f59e0b"}}>
        <CircularProgress />
      </div>
    );
  }

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
      {/*<HookForm showLogin={showLogin} />*/}
      <div>{children}</div>
    </>
  );
}

export default ClientComponent;