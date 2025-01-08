import Link from "next/link";


function SlideMain({ isOpen }) {
  return (
    <div
      className={`absolute z-{0} left-0 top-18 flex flex-col bg-background text-white p-2 rounded shadow-lg transition-transform duration-500 ease-in-out w-[375px] overflow-hidden${
        isOpen
          ? "opacity-100 visible translate-x-0"
          : "opacity-0 invisible -translate-x-full"
      }`}
    >
      <di className="flex flex-col place-content-start items-start rounded-lg bg-background p-8">
        <img src="/user_albert.jpg" className="w-16 rounded-full" />
        <h1 className="text-gray-300 font-semibold pt-4">ALBERTO</h1>
      </di>
      <div className="flex flex-col p-4 pb-96">
        <Link
          className="text-gray-300 text-lg p-1 hover:bg-gray-100 hover:text-gray-950 pl-4 rounded-xl font-semibold mb-2"
          href="/"
        >
          Home
        </Link>
        <Link
          className="text-gray-300 text-lg p-1 hover:bg-gray-100 hover:text-gray-950 pl-4 rounded-xl font-semibold mb-2"
          href="/profile"
        >
          Profile
        </Link>
        <Link
          className="text-gray-300 text-lg p-1 hover:bg-gray-100 hover:text-gray-950 pl-4 rounded-xl font-semibold mb-2"
          href="/ranking"
        >
          Ranking
        </Link>
        <Link
          className="text-gray-300 text-lg p-1 hover:bg-gray-100 hover:text-gray-950 pl-4 rounded-xl font-semibold mb-2"
          href="/friends"
        >
          Friends
        </Link>
        <Link
          className="text-gray-300 text-lg p-1 hover:bg-gray-100 hover:text-gray-950 pl-4 rounded-xl font-semibold mb-2"
          href="/trend"
        >
          Trend
        </Link>
        <Link
          className="text-gray-300 text-lg p-1 hover:bg-gray-100 hover:text-gray-950 pl-4 rounded-xl font-semibold mb-2"
          href="/subscription"
        >
          Subscription
        </Link>
        <Link
          className="text-gray-300 text-lg p-1 hover:bg-gray-100 hover:text-gray-950 pl-4 rounded-xl font-semibold mb-2"
          href="/settings"
        >
          Settings
        </Link>
      </div>
      <div className="bg-background">
        <h2 className="text-gray-300 text-lg p-2">Suscribite</h2>
      </div>
    </div>
  );
}

export default SlideMain;
