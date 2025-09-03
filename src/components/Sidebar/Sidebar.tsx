import { useState, type ReactNode, createContext, useContext } from "react";
import Route from "./RouteSelect";
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
    <aside
      className={`h-screen flex-none overflow-hidden box-border
  transition-[width] duration-300 ease-in-out
  ${expanded ? "w-[260px]" : "w-[72px]"}`}
    >
      <nav className="h-screen flex flex-col justify-between p-2">
        {/* //! Logo */}
        <div
          className={`flex items-center justify-between transition-all duration-200 p-2 ${
            expanded ? "px-4 space-x-2" : "px-2"
          }`}
        >
          <NavLink
            to="/"
            className={`flex w-full transition-all duration-300 overflow-hidden
      ${expanded ? "opacity-100 max-w-full" : "opacity-0 max-w-0"}
    `}
          >
            <h1 className="font-revalia text-[22px] font-bold whitespace-nowrap">
              CapitalEdge
            </h1>
          </NavLink>

          <button
            onClick={() => setExpanded((cur) => !cur)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-200"
          >
            {expanded ? (
              <ChevronDoubleLeftIcon className="cursor-pointer" width={30} />
            ) : (
              <ChevronDoubleRightIcon className="cursor-pointer" width={30} />
            )}
          </button>
        </div>

        {/* //! RouteSelect */}
        {/* <div className="space-y-5 px-4 mt-5 flex-1">
          <Route icon="ChartBarSquare" iconName="Dashboard" to="" />
          <Route icon="Banknotes" iconName="Transection" to="transection" />
          <Route icon="UserIcon" iconName="Profile" to="profile" />
        </div> */}

        {/* Render custom sidebar items passed from parent */}
        {children ? (
          <ul
            className={`mt-5 flex-1 py-2 space-y-2 ${
              expanded ? "px-4" : "px-2"
            }`}
          >
            {children}
          </ul>
        ) : null}

        {/* //! AccountToggle */}
        <div
          className={`border flex border-stone-300   space-x-3 ${
            expanded ? "p-4" : "p-1"
          }`}
        >
          <button className="flex w-full rounded-full p-1 space-x-2 cursor-pointer">
            <img
              className="w-10 h-10 rounded-full shrink-0 shadow"
              src={profileImage}
              alt="Profile"
            />
            <div
              className={`flex w-full transition-all duration-300 overflow-hidden flex-col
      ${expanded ? "opacity-100 max-w-full" : "opacity-0 max-w-0"}
    `}
            >
              <span className="text-[14px] font-bold block tracking-wide">
                Lokendra Nath
              </span>
              <span className="text-[11px] font-normal block tracking-wider text-stone-400">
                ln25@gmail.com
              </span>
            </div>
          </button>
          <EllipsisVerticalIcon width={20} className="cursor-pointer" />
        </div>
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
