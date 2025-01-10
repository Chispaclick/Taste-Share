import FluentSearch20Regular from '@/components/icons/FluentSearch20Regular';

function Friends() {
  return (
    <div className="flex flex-col place-content-center items-center bg-background w-full p-4">
      <div className="flex place-content-center items-center w-full  border-gray-300 border-[1px] rounded-md px-4">
        <div className="flex place-content-center items-center w-full">
          <input className="w-full outline-none border-none rounded-xl bg-background p-1 text-gray-300" type="text" placeholder="Search...." />
          <FluentSearch20Regular />
        </div>
      </div>
      <h1>Friends</h1>
    </div>
  );
}

export default Friends;
