"use client";
import UserData from "@/components/user-data/UserData";
import FormUp from "@/components/form-up/FormUp";
import React, { useState } from "react";



function Profile() {

  const [ upContent, setUpContet ] = useState(false) 

  const HandlerUpConten = () => {
    setUpContet(!upContent)
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
          <button 
          onClick={ HandlerUpConten }
          className="bg-amber-600 w-full p-2 rounded-md font-bold hover:bg-gray-300 transition-all ease-in">
            Subir Contenido
          </button>
        </div>
        <FormUp upContent={upContent}/>
      </div>
    </>
  );
}

export default Profile;
