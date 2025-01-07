import Link from 'next/link';
import QlementineIconsUser16 from "@/components/icons/QlementineIconsUser16";


function SlideMain() {
  return (
    <div className="flex flex-col bg-background place-content-center items-centerw-full p-4">
      <di className="flex flex-col place-content-center items-center border-gray-300 border-[0.2px] rounded-lg bg-background p-10">
        <QlementineIconsUser16 className='w-24'/>
        <h1 className="text-gray-300 text-xl">Name User</h1>
      </di>
      <div className="flex flex-col p-6">
        <Link className="text-gray-300 text-lg p-1" href="/">Home</Link>
        <Link className="text-gray-300 text-lg p-1" href="/profile">
        Profile</Link>
        <Link className="text-gray-300 text-lg p-1" href="/ranking">Ranking</Link>
        <Link className="text-gray-300 text-lg p-1" href="/friends">Friends</Link>
        <Link className="text-gray-300 text-lg p-1" href="/trend">Trend</Link>
        <Link className="text-gray-300 text-lg p-1" href="/subscription">Subscription</Link>
        <Link className="text-gray-300 text-lg p-1" href="/settings">Settings</Link>
      </div>
      
    </div>
  );
}

export default SlideMain;
