"use client";

import BottonMenu from "@/components/bottom-menu/BottonMenu";
import UIDNotification from "@/components/notification-uid/UIDNotification";
import React, { useState } from "react";

function Notifications() {
  const [readNotification, setReadNotification] = useState(false);
  const [typeMessage, setTypeMessage] = useState([
    newFriend,
    newLike,
    newMessage,
  ]);

  const onReadNotification = () => {
    setReadNotification(!readNotification);
  };

  const typeOfNotification = () => {
    setTypeMessage(!typeMessage);
  };

  return (
    <>
      <div className="flex-col bg-zinc-900 place-content-center items-start p-6 w-full box-border mt-8">
        <UIDNotification
          onReadNotification={onReadNotification}
          typeOfNotification={typeOfNotification}
        />
      </div>
      <BottonMenu />
    </>
  );
}

export default Notifications;
