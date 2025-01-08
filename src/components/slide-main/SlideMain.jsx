import Link from "next/link";
import QlementineIconsUser16 from "@/components/icons/QlementineIconsUser16";

function SlideMain({ isOpen }) {
  return (
    <div
      className={`absolute left-0 top-18 flex flex-col bg-background text-white p-4 rounded shadow-lg transition-transform duration-500 ease-in-out w-[430px] ${
        isOpen
          ? "opacity-100 visible translate-x-0"
          : "opacity-0 invisible -translate-x-full"
      }`}
    >
      <di className="flex flex-col place-content-center items-center border-gray-300 border-[0.2px] rounded-lg bg-background p-10">
        <QlementineIconsUser16
          onClick={isOpen}
          className="cursor-pointer"
        />
        <h1 className="text-gray-300 text-xl">Name User</h1>
      </di>
      <div className="flex flex-col p-6 pb-96">
        <Link
          className="text-gray-300 text-lg p-1 hover:bg-gray-100 hover:text-gray-950 pl-4 rounded-xl"
          href="/"
        >
          Home
        </Link>
        <Link
          className="text-gray-300 text-lg p-1 hover:bg-gray-100 hover:text-gray-950 pl-4 rounded-xl"
          href="/profile"
        >
          Profile
        </Link>
        <Link
          className="text-gray-300 text-lg p-1 hover:bg-gray-100 hover:text-gray-950 pl-4 rounded-xl"
          href="/ranking"
        >
          Ranking
        </Link>
        <Link
          className="text-gray-300 text-lg p-1 hover:bg-gray-100 hover:text-gray-950 pl-4 rounded-xl"
          href="/friends"
        >
          Friends
        </Link>
        <Link
          className="text-gray-300 text-lg p-1 hover:bg-gray-100 hover:text-gray-950 pl-4 rounded-xl"
          href="/trend"
        >
          Trend
        </Link>
        <Link
          className="text-gray-300 text-lg p-1 hover:bg-gray-100 hover:text-gray-950 pl-4 rounded-xl"
          href="/subscription"
        >
          Subscription
        </Link>
        <Link
          className="text-gray-300 text-lg p-1 hover:bg-gray-100 hover:text-gray-950 pl-4 rounded-xl"
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
