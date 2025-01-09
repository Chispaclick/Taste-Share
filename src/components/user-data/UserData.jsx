'use client'
import React, { useState } from "react";

 function UserData() {
  const [profileImage, setProfileImage] = useState("/user_albert.jpg");

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col w-full p-4 items-center">
      <img
        src={profileImage}
        alt="Profile"
        className="w-16 rounded-full"
      />
      <h1 className="text-gray-300 text-lg font-bold my-4">Alberto</h1>
      <label
        htmlFor="profileImageInput"
        className="cursor-pointer text-blue-500 underline"
      >
        Cambiar foto de perfil
      </label>
      <input
        id="profileImageInput"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleImageChange}
      />
    </div>
  );
}

export default UserData;