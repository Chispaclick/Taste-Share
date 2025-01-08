import React from "react";
import AntDesignCloseOutlined from "@/components/icons/AntDesignCloseOutlined";

function Login() {
  return (
    <div className="absolute z-{100} flex flex-col place-content-center items-center bg-background  w-full h-[843px]">
      <form className="flex flex-col place-content-center items-center bg-gray-300  w-[350px] rounded-md p-2">
        <div className="relative flex bg-gray-300 place-content-center items-center w-full">
          <AntDesignCloseOutlined className="absolute right-0 top-0 mt-1 mr-1" />
          <h1 className="text-gray-950 text-3xl font-bold mb-4 py-10">
            Wellcome
          </h1>
        </div>
        <input
          className="w-full p-2 rounded-md my-10"
          type="email"
          placeholder="Email"
        />
        <input
          className="w-full p-2 rounded-md mb-20"
          type="password"
          placeholder="Password"
        />
        <button className="bg-background w-full p-2 text-gray-300 rounded-md flex place-content-center items-center">
          Sign with Google
        </button>
        <p className="text-sm pt-2">Already you have an account</p>
        <p className="text-red-500 text-sm  pb-4">Login</p>
      </form>
    </div>
  );
}

export default Login;
