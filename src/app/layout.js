"use client";
import "./globals.css"; // Asegúrate de incluir tu archivo CSS global
import { Kanit } from "next/font/google";
import NavBar from "@/components/navbar/NavBar";
import SlideMain from "@/components/slide-main/SlideMain";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { metadata } from "./metada";
import { useState } from "react";

// Carga la fuente Kanit con los pesos deseados
const kanit = Kanit({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-kanit",
});

// Metadata para el layout

// RootLayout
function RootLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [loginHidden, setLoginHidden] = useState(false);
  const [changeIcon, setChangeIcon] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setChangeIcon(!changeIcon);
    
  };

  const showLogin = () => {
    setLoginHidden(!loginHidden);
  };


  return (
    <html lang="en" className={kanit.className}>
      <body>
        <Provider store={store}>
          <NavBar
           toggleMenu={toggleMenu} 
           changeIcon={changeIcon} />
          <SlideMain isOpen={isOpen} />
          {/* Incluye el ClientComponent que maneja NavBar y SlideMain */}
          <menu>{children}</menu>
        </Provider>
      </body>
    </html>
  );
}

export default RootLayout;
