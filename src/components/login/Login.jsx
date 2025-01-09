"use client";

import React from "react";
import AntDesignCloseOutlined from "@/components/icons/AntDesignCloseOutlined";
import handleValueInput from "@/app/hooks/useForm";

const Login = ({ loginHidden }) => {
  return (
    <div
      className={`absolute top-0 border-red-700 border-[1px] flex flex-col place-content-center items-center bg-background w-full h-[843px] ${
        loginHidden ? "block" : "hidden"
      }`}
    >
      <form className="flex flex-col place-content-center items-center bg-gray-300  w-[350px] rounded-md p-2">
        <div className="relative flex bg-gray-300 place-content-center items-center w-full">
          <button className="hover:border-b-red-600">
            <AntDesignCloseOutlined className="absolute right-0 top-0 mt-1 mr-1  m-2" />
          </button>
          <h1 className="text-gray-950 text-3xl font-bold mb-4 py-10">
            Wellcome
          </h1>
        </div>
        <label className="w-full p-2" for="email">
          Name
          <input
            id="email"
            className="w-full p-2 rounded-md"
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleValueInput}
          />
        </label>
        <label className="w-full p-2" for="email">
          Password
          <input
            id="password"
            className="w-full p-2 rounded-md mb-20"
            type="password"
            name="password"
            placeholder="Password"
          />
        </label>
        <button className="bg-background w-full p-2 mb-2 text-gray-300 rounded-md flex place-content-center items-center">
          Sign with Google
        </button>
        <button className="bg-blue-600 w-full p-2 text-gray-300 rounded-md flex place-content-center items-center">
          Sign with Facebook
        </button>
        <p className="text-sm pt-2">Already you have an account</p>
        <p className="text-red-500 text-sm  pb-8">Login</p>
      </form>
    </div>
  );
};

export default Login;
