import { useState, type ReactNode, createContext, useContext } from "react";
import Route from "./RouteSelect";
import {
  BanknotesIcon,
  BuildingStorefrontIcon,
  ChartBarIcon,
  ChartBarSquareIcon,
  Cog6ToothIcon,
  CubeTransparentIcon,
  InboxStackIcon,
  PresentationChartLineIcon,
  QuestionMarkCircleIcon,
  ShoppingCartIcon,
  UserCircleIcon,
} from "@heroicons/react/16/solid";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronRightIcon,
  EllipsisHorizontalIcon,
  EllipsisVerticalIcon,
  ForwardIcon,
} from "@heroicons/react/16/solid";
import profileImage from "@assets/pfp-lokendra2.png";
import { NavLink } from "react-router-dom";
import { SidebarContext } from "../Layout/Layout";

interface SidebarProps {
  children?: ReactNode;
}

const Sidebar = ({ children }: SidebarProps) => {
  const { expanded, setExpanded } = useContext(SidebarContext);

  return (
    <aside className="fixed w-55 bg-white h-full overflow-y-auto left-0 flex-none overflow-hidden box-border shadow-lg">
      <nav className="h-96 flex flex-col justify-between p-2">
        {/* Render custom sidebar items passed from parent */}
        <ul
          className={`mt-5 flex-1 py-2 space-y-2 ${expanded ? "px-4" : "px-2"}`}
        >
          <SidebareIcon
            icon={<PresentationChartLineIcon width={25} />}
            text="Dashboard"
            active={true}
          />
          <SidebareIcon
            icon={<BanknotesIcon width={25} />}
            text="Billing"
            active={false}
          />
          <SidebareIcon
            icon={<InboxStackIcon width={25} />}
            text="Inventory"
            active={false}
          />
          <SidebareIcon
            icon={<BuildingStorefrontIcon width={25} />}
            text="Orders"
            active={false}
          />
          <SidebareIcon
            icon={<UserCircleIcon width={25} />}
            text="Users"
            active={false}
          />
          <SidebareIcon
            icon={<Cog6ToothIcon width={25} />}
            text="Setting"
            active={false}
          />
          <SidebareIcon
            icon={<QuestionMarkCircleIcon width={25} />}
            text="Help"
            active={false}
          />
        </ul>
      </nav>
    </aside>
  );
};

interface SidebareIconProps {
  icon: ReactNode;
  text: string;
  active?: boolean;
  alert?: boolean;
}

export function SidebareIcon({ icon, text, active }: SidebareIconProps) {
  const { expanded } = useContext(SidebarContext);

  return (
    <li
      className={`relative flex items-center my-2 font-medium cursor-pointer font-Poppins
  rounded-xl overflow-hidden
  transition-[padding,background-color,color,box-shadow] duration-300 ease-in-out
  ${expanded ? "justify-start px-3 py-2" : "justify-center p-2 px-3"}
  ${
    active
      ? "bg-white text-stone-950 shadow-lg"
      : "text-stone-500 hover:bg-stone-200 shadow-none"
  }`}
    >
      <span className="shrink-0">{icon}</span>
      <span
        className={`ml-3 whitespace-nowrap overflow-hidden
    transition-[max-width,opacity] duration-300 ease-in-out
    ${expanded ? "opacity-100 max-w-40" : "opacity-0 max-w-0"}`}
      >
        {text}
      </span>
    </li>
  );
}

export default Sidebar;
