import React from "react";
import { useSelector } from "react-redux";

function UIDNotification({ onReadNotification, typeOfNotification }) {

  const { photoURL, displayName } = useSelector((state) => state.auth);      //Aqui llamamos a photoURL, displayName del slite auth.
  const { type } = useSelector((state) => state.notifications);              //Aqui llamamos a type de slite auth, que nos dira que tipo de notificacione es



  return (
    <div className="flex w-full place-content-start items-center p-8">
      <img src={photoURL} className="w-20 rounded-full" />
      <p className="text-gray-300">{displayName}</p>
      <p>{type}</p>
    </div>
  );
}

export default UIDNotification;
