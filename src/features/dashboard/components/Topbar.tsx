import { CalendarDateRangeIcon } from "@heroicons/react/16/solid";
import React from "react";

const Topbar = () => {
  return (
    <div className="py-6 border-b border-stone-300 pb-4 mb-4 flex justify-between px-5 items-center">
      <div className="flex flex-col">
        <span className="text-[14px] lg:text-[18px]">
          Good Morning, <span className="font-bold">Lokendra</span> 🚀
        </span>
        <span className="text-[10px] lg:text-[14px]">
          Saturday, Aug 22th 2025
        </span>
      </div>
      <button className="bg-stone-100 h-9 px-2 flex items-center rounded-lg space-x-2 cursor-pointer">
        <CalendarDateRangeIcon className="w-5 md:w-5" />
        <p className="mt-1 text-sm md:text-lg">Past 6 Months</p>
      </button>
    </div>
  );
};

export default Topbar;
