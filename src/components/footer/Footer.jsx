import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <div className="bg-gray-300 flex place-content-center items-center w-full p-10">
      <div className="flex flex-col place-content-start items-center w-1/2">
        <ul>
          <li className="text-gray-950">
            <Link href="/">Home</Link>
          </li>
          <li className="text-gray-950">
            <Link href="/explore">Explorar</Link>
          </li>
          <li className="text-gray-950">
            <Link href="/profile">Perfil</Link>
          </li>
          
          <li className="text-gray-950">
            <Link href="/ranking">Ranking</Link>
          </li>
          <li className="text-gray-950">
            <Link href="/friends">Amigos</Link>
          </li>
        </ul>
      </div>

      <div className="flex flex-col place-content-start  items-center w-1/2">
        <ul>
          <li>
            <Link href="/subscriptions">Suscripciones</Link>
          </li>
          <li className="text-gray-950">
            <Link href="/settings">Ajustes</Link>
          </li>
          <li className="text-gray-950">
            <Link href="/trends">Tendencias</Link>
          </li>
          <li className="text-gray-950">
            <Link href="/help">Ayuda</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
