"use client";
import "./globals.css"; // Asegúrate de incluir tu archivo CSS global
import { Kanit } from "next/font/google";
import NavBar from "@/components/navbar/NavBar";
import SlideMain from "@/components/slide-main/SlideMain";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { metadata } from "./metada";
import { useEffect, useState } from "react";

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

   // Manejo de metadata usando useEffect
   useEffect(() => {
    // Actualiza el título del documento
    document.title = metadata.title;

    // Actualiza la descripción
    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute("content", metadata.description);
    } else {
      const newMeta = document.createElement("meta");
      newMeta.name = "description";
      newMeta.content = metadata.description;
      document.head.appendChild(newMeta);
    }

    // Actualiza el icono
    const linkIcon = document.querySelector("link[rel='icon']");
    if (linkIcon) {
      linkIcon.href = metadata.icons.icon;
    } else {
      const newIcon = document.createElement("link");
      newIcon.rel = "icon";
      newIcon.href = metadata.icons.icon;
      document.head.appendChild(newIcon);
    }
  }, []);


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
