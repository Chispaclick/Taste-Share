'use client'
import UserData from "@/components/user-data/UserData";
import FormUp from '@/components/form-up/FormUp';
import React from "react";



function Profile() {
  return (
    <>
    <div className="bg-background flex flex-col place-content-center items-center w-full h-screen">
      <div className="flex-1 place-content-center items-start p-4">
        <UserData />
      </div>
      <div className="flex-1 place-content-center items-start p-4">
        <p className="text-gray-300 text-sm font-semibold mb-1">Ratings:</p>
        <p className="text-gray-300 text-sm font-semibold mb-1">Posts:</p>
        <p className="text-gray-300 text-sm font-semibold mb-1">Followers:</p>
      </div>
      <FormUp />
    </div>
    
    </>
  );
}

export default Profile;
