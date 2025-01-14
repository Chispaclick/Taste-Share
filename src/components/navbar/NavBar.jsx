import React from "react";
import MdiHamburgerMenu from "@/components/icons/MdiHamburgerMenu";
import QlementineIconsUser16 from "@/components/icons/QlementineIconsUser16";
import Link from "next/link";
import SolarUserCircleLinear from "../icons/SolarUserCircleLinear";

function NavBar({ toggleMenu, showLogin }) {
  return (
    <div className="flex w-full items-center place-content-between bg-background p-3 border-b-[0.2px] border-b-gray-300 justify-between">
      <MdiHamburgerMenu onClick={toggleMenu} className="ml-2" />
      <Link href="/taste-share">
        <img src="/logo_taste_share.png" className="w-12 ml-3" />
      </Link>
      <Link 
      className="flex items-center"
      href="/log">
        <button className="bg-amber-600 px-3 py-1 text-gray-950 font-bold rounded-md" >
          Login
        </button>
      </Link>
    </div>
  );
}

export default NavBar;
