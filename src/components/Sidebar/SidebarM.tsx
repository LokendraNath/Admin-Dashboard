import { useState, type ReactNode, createContext, useContext } from "react";
import Route from "./RouteSelect";
import {
  ArrowLeftStartOnRectangleIcon,
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
import profileImage from "/assets/pfp-lokendra2.png";
import { NavLink } from "react-router-dom";
import { SidebarContext } from "../../Layout";
import { motion } from "motion/react";
import { useAuthStore } from "../../store/store";

interface SidebarProps {
  children?: ReactNode;
}
const SidebarVariants = {
  hidden: { x: "-100%" },
  visible: { x: 0 },
  exit: { x: "-100%" },
};

const SidebarM = ({ children }: SidebarProps) => {
  const { expanded, setExpanded } = useContext(SidebarContext);
  const logout = useAuthStore((state) => state.logout);

  return (
    <motion.aside
      className={`fixed top-0 left-0 flex-none overflow-hidden z-50 box-border w-64 h-full bg-white dark:bg-[#292D32] dark:text-white`}
      variants={SidebarVariants}
      initial="hidden"
      animate={expanded ? "visible" : "hidden"}
      exit="exit"
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
            <h1 className="font-revalia text-[20px] font-bold whitespace-nowrap">
              CapitalEdge
            </h1>
          </NavLink>

          <button
            onClick={() => setExpanded((cur) => !cur)}
            className="p-1.5 rounded-lg"
          >
            <ChevronDoubleLeftIcon className="cursor-pointer" width={30} />
          </button>
        </div>
        <ul
          className={`mt-5 flex-1 py-2 space-y-2 ${expanded ? "px-4" : "px-2"}`}
        >
          <NavLink
            to="/"
            end
            onClick={() => setExpanded(!expanded)}
            className={({ isActive }) =>
              `flex items-center font-medium font-Poppins rounded-xl transition-all duration-300 ease-in-out justify-start px-3 py-2
               ${
                 isActive
                   ? "bg-blue-600 text-white shadow-md"
                   : "text-stone-500 hover:bg-stone-200"
               }`
            }
          >
            <span className="shrink-0">
              <PresentationChartLineIcon width={25} />
            </span>
            <span
              className={`ml-3 whitespace-nowrap overflow-hidden transition-all duration-300
               opacity-100 max-w-40`}
            >
              Dashboard
            </span>
          </NavLink>

          <SidebareIcon
            to="/transections"
            icon={<BanknotesIcon width={25} />}
            text="Transections"
          />
          <SidebareIcon
            to="/inventory"
            icon={<InboxStackIcon width={25} />}
            text="Inventory"
          />
          <SidebareIcon
            to="/orders"
            icon={<BuildingStorefrontIcon width={25} />}
            text="Orders"
          />
          <SidebareIcon
            to="/users"
            icon={<UserCircleIcon width={25} />}
            text="Users"
          />
          <SidebareIcon
            to="/settings"
            icon={<Cog6ToothIcon width={25} />}
            text="Settings"
          />
          <SidebareIcon
            to="/help"
            icon={<QuestionMarkCircleIcon width={25} />}
            text="Help"
          />
          <button
            onClick={() => {
              logout();
              setExpanded(!expanded);
            }}
            className="flex items-center font-medium font-Poppins rounded-xl transition-all duration-300 ease-in-out justify-start px-3 py-2 text-red-600 cursor-pointer"
          >
            <span className="shrink-0">
              <ArrowLeftStartOnRectangleIcon width={20} />
            </span>
            <span
              className={`ml-3 whitespace-nowrap overflow-hidden transition-all duration-300
               opacity-100 max-w-40`}
            >
              Logout
            </span>
          </button>
        </ul>

        {/* //! AccountToggle */}
        <div className={`flex    space-x-3 ${expanded ? "p-4" : "p-1"}`}>
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
    </motion.aside>
  );
};

interface SidebareIconProps {
  to: string;
  icon: ReactNode;
  text: string;
}

function SidebareIcon({ to, icon, text }: SidebareIconProps) {
  const { expanded, setExpanded } = useContext(SidebarContext);

  return (
    <NavLink
      to={to}
      onClick={() => setExpanded(!expanded)}
      className={({ isActive }) =>
        `flex items-center font-medium font-Poppins rounded-xl transition-all duration-300 ease-in-out justify-start px-3 py-2
        ${
          isActive
            ? "bg-blue-600 text-white shadow-md"
            : "text-stone-500 hover:bg-stone-200"
        }`
      }
    >
      <span className="shrink-0">{icon}</span>
      <span
        className={`ml-3 whitespace-nowrap overflow-hidden transition-all duration-300
        opacity-100 max-w-40`}
      >
        {text}
      </span>
    </NavLink>
  );
}

export default SidebarM;
