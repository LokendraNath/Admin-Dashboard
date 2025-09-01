import {
  BanknotesIcon,
  ChartBarSquareIcon,
  ClipboardDocumentCheckIcon,
  CreditCardIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  UserGroupIcon,
  UserIcon,
} from "@heroicons/react/16/solid";
import React from "react";
import { NavLink } from "react-router-dom";

const RouteSelect = () => {
  return (
    <div className="space-y-5 p-4">
      <Route icon="ChartBarSquare" iconName="Dashboard" to="" />
      <Route icon="Banknotes" iconName="Transection" to="transection" />
      <Route icon="UserIcon" iconName="Profile" to="profile" />
    </div>
  );
};

const Route = ({
  icon,
  iconName,
  to,
}: {
  icon: string;
  iconName: string;
  to: string;
}) => {
  return (
    <NavLink
      to={to}
      end
      className={({ isActive }) =>
        isActive
          ? "flex items-center space-x-3 w-full bg-white text-stone-950 shadow-lg transition-all py-3 px-2 rounded-xl cursor-pointer"
          : "flex items-center space-x-3 w-full text-stone-500 hover:bg-stone-200 shadow-none transition-all py-3 px-2 rounded-xl cursor-pointer"
      }
    >
      {icon === "ChartBarSquare" && <ChartBarSquareIcon className="w-7 h-7" />}
      {icon === "Banknotes" && <BanknotesIcon className="w-7 h-7" />}
      {icon === "UserIcon" && <UserIcon className="w-7 h-7" />}
      {icon === "Product" && <ShoppingBagIcon className="w-7 h-7" />}
      <p className="text-xl tracking-wider mt-1">{iconName}</p>
    </NavLink>
  );
};

export default RouteSelect;
