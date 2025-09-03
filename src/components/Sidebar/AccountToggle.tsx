import React from "react";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronRightIcon,
  EllipsisHorizontalIcon,
  ForwardIcon,
} from "@heroicons/react/16/solid";
import profileImage from "@assets/pfp-lokendra2.png";
export const AccountToggle = () => {
  return (
    <div className="flex mt-4 border-stone-300 pb-2 p-4 space-x-3">
      <button className="flex w-full rounded-full p-1 transition-colors  duration-200 cursor-pointer space-x-2 hover:bg-stone-100">
        <img
          className="w-10 h-10 rounded-full shrink-0 shadow"
          src={profileImage}
          alt="Profile"
        />
        <div className="text-start">
          <span className="text-[14px] font-bold block tracking-wide">
            Lokendra Nath
          </span>
          <span className="text-[11px] font-normal block tracking-wider text-stone-400">
            ln25@gmail.com
          </span>
        </div>
      </button>
      <ChevronDoubleLeftIcon className="cursor-pointer" width={25} />
    </div>
  );
};
