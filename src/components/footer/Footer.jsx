import React from "react";
import Link from "next/link";
import AntDesignFacebookFilled from '@/components/icons/AntDesignFacebookFilled';
import CircumInstagram from '@/components/icons/CircumInstagram';
import PajamasTwitter from '@/components/icons/PajamasTwitter';


function Footer() {
  return (
    <div className="bg-gray-300 flex flex-col place-content-center items-center w-full p-8">
      <div className="flex flex-col place-content-start  items-start w-full pl-4">
        <h4 className="text-gray-950 font-semibold text-2xl">Asistencia</h4>
        <ul>
          <li className="text-gray-950 text-md text-start">
            <Link href="/subscriptions">Suscripciones</Link>
          </li>
          <li className="text-gray-950 text-md text-start">
            <Link href="/settings">Preguntas frecuentes</Link>
          </li>
          <li className="text-gray-950 text-md text-start">
            <Link href="/trends">Contact support</Link>
          </li>
          <li className="text-gray-950 text-md text-start">
            <Link href="/help">Ayuda</Link>
          </li>
        </ul>
      </div>
      <hr className="border-gray-950 border-1 w-80 mt-6"/>
      <div className="flex place-content-start items-center pt-6">
        <AntDesignFacebookFilled  className="pl-2"/>
        <CircumInstagram  className="pl-2"/>
        <PajamasTwitter className="pl-2" />
      </div>
    </div>
  );
}

export default Footer;
