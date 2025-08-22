import React from "react";
import profileImage from "../../assets/pfp-lokendra2.png";
import { EllipsisHorizontalIcon } from "@heroicons/react/16/solid";

export const AccountToggle = () => {
  return (
    <div className="mt-4 border-b border-stone-300 pb-2 mb-4">
      <button className="flex gap-2 hover:bg-gray-300 w-full rounded-full p-2 transition-colors duration-200">
        <img
          className="w-10 h-10 rounded-full shrink-0 shadow"
          src={profileImage}
          alt="Profile"
        />
        <div className="text-start">
          <span className="text-sm font-bold block tracking-widest">Lokendra Nath</span>
          <span className="text-sm font-normal block">
            lokendra25@gmail.com
          </span>
        </div>
        <EllipsisHorizontalIcon  className="w-5 text-gray-400 ml-2"/>
      </button>
    </div>
  );
};
