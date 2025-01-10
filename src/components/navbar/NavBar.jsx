import React from "react";
import HeroiconsBars4Solid from "@/components/icons/HeroiconsBars4Solid";
import QlementineIconsUser16 from "@/components/icons/QlementineIconsUser16";
import Link from "next/link";

function NavBar({ toggleMenu, showLogin }) {
  return (
    <div className="flex fixed top-0 z-20 w-full items-center place-content-between bg-background p-4 border-b-[0.2px] border-b-gray-300">
      <HeroiconsBars4Solid onClick={toggleMenu} className="ml-2"/>
      <Link href="/taste-share">
        <img src="/logo_taste_share.png" className="w-20 ml-6" />
      </Link>
      <Link href="/log">
        <button className="bg-gray-300 text-gray-950 font-semibold  rounded-lg py-1 px-3 mr-2"
        onClick={ showLogin }>
          Login
        </button>
      </Link>
    </div>
  );
}

export default NavBar;
