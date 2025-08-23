import React from "react";
import profileImage from "../../assets/pfp-lokendra2.png";
import { EllipsisHorizontalIcon } from "@heroicons/react/16/solid";

export const AccountToggle = () => {
  return (
    <div className="mt-4 border-b border-stone-300 pb-2 mb-4">
      <button className="flex gap-2 hover:bg-stone-200 w-full rounded-full p-2 transition-colors px-2 duration-200 items-center justify-between cursor-pointer">
        <div className="flex space-x-2 items-center">
          <img
            className="w-12 h-12 rounded-full shrink-0 shadow"
            src={profileImage}
            alt="Profile"
          />
          <div className="text-start">
            <span className="text-[17px] font-bold block tracking-wide">
              Lokendra Nath
            </span>
            <span className="text-sm font-normal block tracking-wider text-stone-400">
              ln25@gmail.com
            </span>
          </div>
        </div>
        <EllipsisHorizontalIcon className="w-5 text-gray-400 ml-2 rounded-full" />
      </button>
    </div>
  );
};
