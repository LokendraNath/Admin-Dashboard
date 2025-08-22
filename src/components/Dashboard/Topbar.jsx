import { CalendarDateRangeIcon } from "@heroicons/react/16/solid";
import React from "react";

const Topbar = () => {
  return (
    <div className="mt-4 border-b border-stone-300 pb-4 mb-4 flex justify-between px-5 items-center">
      <div className="flex flex-col">
        <span className="text-lg">Good Morning, Lokendra 🚀</span>
        <span className="text-sm">Saturday, Aug 22th 2025</span>
      </div>
      <button className="bg-stone-200 h-9 px-2 flex items-center rounded-lg space-x-2">
        <CalendarDateRangeIcon  className="w-7"/>
        <p className="mt-1">Past 6 Months</p>
      </button>
    </div>
  );
};

export default Topbar;
