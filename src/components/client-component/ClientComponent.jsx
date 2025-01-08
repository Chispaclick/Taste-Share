'use client';

import NavBar from "@/components/navbar/NavBar";
import SlideMain from "@/components/slide-main/SlideMain";
import { useState } from "react";
import Footer from "@/components/footer/Footer";

export default function ClientComponent({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Barra de navegación */}
      <NavBar toggleMenu={toggleMenu} />
      {/* Menú desplegable<Login /> */}
      <SlideMain isOpen={isOpen} />
      

      {/* Contenido principal */}
      <main>{children}</main>
      <Footer />
    </>
  );
}