import React from "react";
import MdiHamburgerMenu from "@/components/icons/MdiHamburgerMenu";
import QlementineIconsUser16 from "@/components/icons/QlementineIconsUser16";
import Link from "next/link";
import SolarUserCircleLinear from "../icons/SolarUserCircleLinear";

function NavBar({ toggleMenu, showLogin }) {
  return (
    <div className="flex fixed top-0 z-20 w-full items-center place-content-between bg-background p-3 border-b-[0.2px] border-b-gray-300 justify-between">
      <MdiHamburgerMenu onClick={toggleMenu} className="ml-2" />
      <Link href="/taste-share">
        <img src="/logo_taste_share.png" className="w-12 ml-5" />
      </Link>
      <Link 
      className="flex items-center"
      href="/log">
        <h3 className="text-gray-300 pr-1">USER</h3>
        <img src="user_logo.png" className="w-8 mr-1" />
      </Link>
    </div>
  );
}

export default NavBar;
