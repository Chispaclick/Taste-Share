import Link from "next/link";
import { useEffect } from "react";

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
      className={`fixed z-10 left-0 top-10 flex flex-col bg-background text-white p-2 rounded shadow-lg transition-transform duration-500 ease-in-out w-full overflow-hidden h-screen overflow-y-hidden ${
        isOpen
          ? "opacity-100 visible translate-x-0 "
          : "opacity-0 invisible -translate-x-full"
      }`}
    >
      <div className=" flex flex-col place-content-center items-center bg-background p-8">
        <img src="/user_logo.png" className="w-16 rounded-full" />
        <h1 className="text-amber-600 font-semibold pt-4">USER NAME</h1>
      </div>
      <div className="flex flex-col pb-86 p-4">
        <Link
          onClick={handleClose}
          className="text-gray-300 text-lg p-1 hover:bg-amber-600 hover:text-gray-950 pl-4 rounded-md  font-semibold mb-2 transition duration-300 ease-in-out"
          href="/"
        >
          Home
        </Link>
        <Link
          onClick={handleClose}
          className="text-gray-300 text-lg p-1 hover:bg-amber-600 hover:text-gray-950 pl-4 rounded-md  font-semibold mb-2 transition duration-300 ease-in-out"
          href="/profile"
        >
          Profile
        </Link>
        <Link
          onClick={handleClose}
          className="text-gray-300 text-lg p-1 hover:bg-amber-600 hover:text-gray-950 pl-4 rounded-md font-semibold mb-2 transition duration-300 ease-in-out"
          href="/ranking"
        >
          Ranking
        </Link>
        <Link
          onClick={handleClose}
          className="text-gray-300 text-lg p-1 hover:bg-amber-600 hover:text-gray-950 pl-4 rounded-md  font-semibold mb-2 transition duration-300 ease-in-out"
          href="/friends"
        >
          Friends
        </Link>
        <Link
          onClick={handleClose}
          className="text-gray-300 text-lg p-1 hover:bg-amber-600 hover:text-gray-950 pl-4 rounded-md  font-semibold mb-2 transition duration-300 ease-in-out"
          href="/comunity"
        >
          Comunity
        </Link>
        <Link
          onClick={handleClose}
          className="text-gray-300 text-lg p-1 hover:bg-amber-600 hover:text-gray-950 pl-4 rounded-md  font-semibold mb-2 transition duration-300 ease-in-out"
          href="/trend"
        >
          Trend
        </Link>
        <Link
          onClick={handleClose}
          className="text-gray-300 text-lg p-1 hover:bg-amber-600 hover:text-gray-950 pl-4 rounded-md  font-semibold mb-2 transition duration-300 ease-in-out"
          href="/subscription"
        >
          Subscription
        </Link>
        <Link
          onClick={handleClose}
          className="text-gray-300 text-lg p-1 hover:bg-amber-600 hover:text-gray-950 pl-4 rounded-md  font-semibold mb-2 transition duration-300 ease-in-out"
          href="/settings"
        >
          Settings
        </Link>
      </div>
      <div className="bg-background p-4 mt-40">
        <Link href="/why" onClick={handleClose}>
          <button className="bg-amber-600 hover:bg-amber-500 text-gray-950 w-full p-2 rounded-md mb-4 font-semibold ">
            Why buy a subscription?
          </button>
        </Link>
      </div>
    </div>
  );
}

export default SlideMain;
