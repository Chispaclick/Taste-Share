// ClientComponent.js (cliente)
'use client';

import NavBar from "@/components/navbar/NavBar";
import SlideMain from "@/components/navbar/NavBar";
import { useState } from "react";

export default function ClientComponent({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <NavBar slideMain={toggleMenu} isOpen={isOpen} />
      <SlideMain isOpen={isOpen} />
    </>
  );
}