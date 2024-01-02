import React from "react";
import { IoIosNotifications } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";

export default function LogoOut() {
  return (
    <div class="flex items-center ">
      <IoIosNotifications size={25} />
      <FaRegUserCircle size={25} />
      <h1 class="text-xl ml-1">Joshua</h1>
    </div>
  );
}
