"use client";
import NavBar from "@/components/navbar/NavBar";
import SlideMain from "@/components/slide-main/SlideMain";
import { useDispatch, useSelector } from "react-redux";

import { useEffect, useState } from "react";
import Spinner from "@/components/loading/Spinner";
import { onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from "@/firebase/config";
import { logout } from "@/slice/authLoginSlice";
import HookForm from "@/components/hook-form/HookForm";
import '@/app/globals.css'; // Asegúrate de incluir tu archivo CSS global




function ClientComponent({ children }) {

  const [isOpen, setIsOpen] = useState(false);
  const [loginHidden, setLoginHidden] = useState(false);
  const [changeIcon, setChangeIcon] = useState(false);
  const [formOpen, setFormOpen] = useState(true);
  
  const dispatch = useDispatch()

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setChangeIcon(!changeIcon);
  };

  const showLogin = () => {
    setFormOpen(!formOpen);
  };

  // Manejo de metad  const dispatch = useDispatch()

  {/*const { status } = useSelector((state) => state.auth);

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, async (user) => {
      if (!user) return dispatch(logout());
      const { uid, email, passsword, photoURL } = user;
      dispatch(login(uid, email, passsword, photoURL));
      console.log(user);
    });
  }, []);
  if (status === "checking") {
    return <Spinner />;
  }*/}







  return (
    <>
      <NavBar toggleMenu={toggleMenu} changeIcon={changeIcon} />
      <SlideMain isOpen={isOpen} />
      <HookForm showLogin={showLogin}/>
      <div>{children}</div>
    </>
  );
}

export default ClientComponent;
