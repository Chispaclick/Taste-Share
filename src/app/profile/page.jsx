"use client";
import UpContent from "@/components/up-content/UpContent";
import UserData from "@/components/user-data/UserData";
import React, { useState } from "react";
import { useDispatch } from "react-redux";



function Profile() {

  const dispatch = useDispatch()
  const [ upContent, setUpContet ] = useState(false) 

  const HandlerUpConten = () => {
    setUpContet(!upContent)
    dispatch(starNewNote)
  }

  return (
    <>
      <div className="bg-background flex flex-col place-content-start items-center w-full p-8 h-custom mt-10">
        <div className=" flex w-full">
          <div className="flex-1 place-content-center items-start p-4 ">
            <UserData />
          </div>
          <div className="flex-1 place-content-center items-start p-4">
            <p className="text-gray-300 text-sm font-semibold mb-1">Ratings:</p>
            <p className="text-gray-300 text-sm font-semibold mb-1">Posts:</p>
            <p className="text-gray-300 text-sm font-semibold mb-1">
              Followers:
            </p>
          </div>
        </div>
        <div className="absolute bottom-3 p-8 w-full flex place-content-center items-center">
          <UpContent HandlerUpConten={HandlerUpConten} />
        </div>
      </div>
    </>
  );
}

export default Profile;
