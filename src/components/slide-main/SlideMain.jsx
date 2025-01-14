'use client'

import Link from "next/link";
import { useEffect } from "react";
import HugeiconsMoneyBag02 from "@/components/icons/HugeiconsMoneyBag02";
import SolarUserCircleLinear from "@/components/icons/SolarUserCircleLinear";
import IconamoonTrendUpLight from "@/components/icons/IconamoonTrendUpLight";
import FluentHome16Regular from "@/components/icons/FluentHome16Regular";
import FluentPeopleCommunity32Regular from "@/components/icons/FluentPeopleCommunity32Regular";
import LsiconSettingOutline from "@/components/icons/LsiconSettingOutline";
import FamiconsNotificationsOutline from "@/components/icons/FamiconsNotificationsOutline";
import IconParkRanking from "@/components/icons/IconParkRanking";
import LaUserFriends from "@/components/icons/LaUserFriends";
import IconamoonHeartThin from "@/components/icons/IconamoonHeartThin";

function SlideMain({ isOpen, setIsOpen }) {
  const handleClose = () => {
    setIsOpen(false); // Cierra el menú al hacer clic en un enlace
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll"); // Deshabilitar scroll
    } else {
      document.body.classList.remove("no-scroll"); // Rehabilitar scroll
    }
    return () => {
      document.body.classList.remove("no-scroll"); // Limpiar la clase cuando el componente se desmonta
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed z-10 left-0 top-16 flex flex-col bg-background text-white p-2 shadow-lg transition-transform duration-500 ease-in-out w-full overflow-hidden h-screen overflow-y-hidden ${
        isOpen
          ? "opacity-100 visible translate-x-0 "
          : "opacity-0 invisible -translate-x-full"
      }`}
    >
      <div className=" flex place-content-start items-center bg-background p-7 mt-4">
        <h1 className="text-amber-600 font-semibold text-2xl pl-2 mb-4 mt-6">USER NAME</h1>
      </div>
      <div className="flex flex-col p-4">
        <Link
          onClick={handleClose}
          className="text-gray-300 text-lg p-1 hover:bg-amber-600 hover:text-gray-950 pl-4 rounded-md  font-semibold mb-2 transition duration-300 ease-in-out flex items-center"
          href="/"
        >
          <FluentHome16Regular className="pr-2" />
          Home
        </Link>
        {/*<Link
          onClick={handleClose}
          className="text-gray-300 text-lg p-1 hover:bg-amber-600 hover:text-gray-950 pl-4 rounded-md  font-semibold mb-2 transition duration-300 ease-in-out flex items-center"
          href="/wellcome"
        >
          <FluentHome16Regular className="pr-2" />
          Wellcome
        </Link>*/}
        <Link
          onClick={handleClose}
          className="text-gray-300 text-lg p-1 hover:bg-amber-600 hover:text-gray-950 pl-4 rounded-md  font-semibold mb-2 transition duration-300 ease-in-out flex items-center"
          href="/profile"
        >
          <SolarUserCircleLinear className="pr-2" />
          Profile
        </Link>
        <Link
          onClick={handleClose}
          className="text-gray-300 text-lg p-1 hover:bg-amber-600 hover:text-gray-950 pl-4 rounded-md font-semibold mb-2 transition duration-300 ease-in-out flex items-center"
          href="/ranking"
        >
          <IconParkRanking className="pr-2" />
          Ranking
        </Link>
        <Link
          onClick={handleClose}
          className="text-gray-300 text-lg p-1 hover:bg-amber-600 hover:text-gray-950 pl-4 rounded-md  font-semibold mb-2 transition duration-300 ease-in-out flex items-center"
          href="/friends"
        >
          <LaUserFriends className="pr-2" />
          Friends
        </Link>
        <Link
          onClick={handleClose}
          className="text-gray-300 text-lg p-1 hover:bg-amber-600 hover:text-gray-950 pl-4 rounded-md  font-semibold mb-2 transition duration-300 ease-in-out flex items-center"
          href="/comunity"
        >
          <FluentPeopleCommunity32Regular className="pr-2" />
          Community
        </Link>
        <Link
          onClick={handleClose}
          className="text-gray-300 text-lg p-1 hover:bg-amber-600 hover:text-gray-950 pl-4 rounded-md  font-semibold mb-2 transition duration-300 ease-in-out flex items-center"
          href="/favorite"
        >
          <IconamoonHeartThin className="pr-2" />
          Favorites
        </Link>
        <Link
          onClick={handleClose}
          className="text-gray-300 text-lg p-1 hover:bg-amber-600 hover:text-gray-950 pl-4 rounded-md  font-semibold mb-2 transition duration-300 ease-in-out flex items-center"
          href="/trend"
        >
          <IconamoonTrendUpLight className="pr-2" />
          Trend
        </Link>
        
        <Link
          onClick={handleClose}
          className="text-gray-300 text-lg p-1 hover:bg-amber-600 hover:text-gray-950 pl-4 rounded-md  font-semibold mb-2 transition duration-300 ease-in-out flex items-center"
          href="/subscription"
        >
          <HugeiconsMoneyBag02 className="pr-2" />
          Subscription
        </Link>
        <Link
          onClick={handleClose}
          className="text-gray-300 text-lg p-1 hover:bg-amber-600 hover:text-gray-950 pl-4 rounded-md  font-semibold mb-2 transition duration-300 ease-in-out flex items-center"
          href="/donation"
        >
          <HugeiconsMoneyBag02 className="pr-2" />
          Donations
        </Link>
        <Link
          onClick={handleClose}
          className="text-gray-300 text-lg p-1 hover:bg-amber-600 hover:text-gray-950 pl-4 rounded-md  font-semibold mb-2 transition duration-300 ease-in-out flex items-center"
          href="/settings"
        >
          <LsiconSettingOutline className="pr-2" />
          Settings
        </Link>
        <Link
          onClick={handleClose}
          className="text-gray-300 text-lg p-1 hover:bg-amber-600 hover:text-gray-950 pl-4 rounded-md  font-semibold mb-2 transition duration-300 ease-in-out flex items-center"
          href="/notifications"
        >
          <FamiconsNotificationsOutline className="pr-2" />
          Notifications
        </Link>
      </div>
      <div className="bg-background p-4 mt-30 relative mb-20">
        <Link href="/why" onClick={handleClose}>
          <button className="bg-amber-600 hover:bg-amber-500 text-gray-950 w-full p-2 rounded-md mb-4 mt-6 font-semibold">
            Why buy a subscription?
          </button>
        </Link>
        <p className="text-gray-300 text-[12px] mt-4 px-4">
              Elige el plan que mejor se adapte a tus necesidades y comienza a
              disfrutar de los beneficios exclusivos .
            </p>
      </div>
    </div>
  );
}

export default SlideMain;
