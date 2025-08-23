import {
  BanknotesIcon,
  ChartBarSquareIcon,
  ClipboardDocumentCheckIcon,
  CreditCardIcon,
  UserCircleIcon,
  UserGroupIcon,
  UserIcon,
} from "@heroicons/react/16/solid";
import React from "react";

const RouteSelect = () => {
  return (
    <div className="space-y-5 p-4">
      <Route selected={true} icon="ChartBarSquare" iconName="Dashboard" />
      <Route selected={false} icon="Banknotes" iconName="Transection" />
      <Route selected={false} icon="UserIcon" iconName="Profile" />
    </div>
  );
};
const Route = ({ selected, icon, iconName }) => {
  return (
    <button
      className={`${
        selected
          ? "bg-white text-stone-950 shadow-lg"
          : "text-stone-500 hover:bg-stone-200 shadow-none"
      } flex items-center space-x-3 w-full transition-all py-3 px-2 rounded-xl cursor-pointer`}
    >
      {icon === "ChartBarSquare" && <ChartBarSquareIcon className="w-7 h-7" />}
      {icon === "Banknotes" && <BanknotesIcon className="w-7 h-7" />}
      {icon === "UserIcon" && <UserIcon className="w-7 h-7" />}
      <p className="text-xl tracking-wider mt-1">{iconName}</p>
    </button>
  );
};
export default RouteSelect;
