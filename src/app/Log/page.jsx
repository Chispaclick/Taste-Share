function Log() {
  return (
    <div className="flex place-content-center items-center bg-background  w-full">
      <form className="flex place-content-center items-center bg-gray-300  w-[350px]">
        <div className="flex bg-background place-content-center items-center" >
          <h1>Wellcome</h1>
        </div>
        <input className="" type="email" placeholder="Email"/>
        <input className="" type="password" placeholder="Password" />
        <button className="bg-background place-content-center items-center w-full p-2 text-gray-300">Sign with Google</button>
      </form>
    </div>
  );
}

export default Log;
