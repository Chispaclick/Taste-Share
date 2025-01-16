import React from "react";
import MdiHamburgerMenu from "@/components/icons/MdiHamburgerMenu";
import IonClose from "@/components/icons/IonClose";
import Link from "next/link";
import { useSelector } from "react-redux";

function NavBar({ toggleMenu, showLogin, changeIcon }) {
  const { displayName } = useSelector((state) => state.auth);

  return (
    <div className="flex fixed z-50 top-0 w-full items-center place-content-between bg-background p-3 border-b-[0.2px] border-b-gray-300 justify-between">
      {/* Menú hamburguesa o icono de cerrar */}
      {changeIcon ? (
        <IonClose onClick={toggleMenu} className="ml-2 transition-transform duration-500" />
      ) : (
        <MdiHamburgerMenu onClick={toggleMenu} className="ml-2 transition-transform duration-500" />
      )}

      {/* Logo */}
      <Link href="/taste-share">
        <img src="/logo_taste_share.png" alt="Logo Taste Share" className="w-12 ml-3" />
      </Link>

      {/* Usuario / Botón Login */}
      <div className="flex items-center">
        {displayName ? (
          // Mostrar la primera palabra del nombre del usuario
          <p className="text-gray-300 font-bold uppercase mr-4">
           {displayName.split(" ")[0]}
          </p>
        ) : (
          // Mostrar botón de login si no hay usuario autenticado
          <Link href="/log">
            <button className="bg-amber-600 px-3 py-1 text-gray-950 font-bold rounded-md">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default NavBar;
