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
import { motion } from "motion/react";

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

  return (
    <motion.aside
      className={`fixed top-0 left-0 flex-none overflow-hidden box-border w-64 h-full bg-white`}
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
            className="p-1.5 rounded-lg bg-gray-50"
          >
            <ChevronDoubleLeftIcon className="cursor-pointer" width={30} />
          </button>
        </div>

        {/* //! RouteSelect */}
        {/* <div className="space-y-5 px-4 mt-5 flex-1">
          <Route icon="ChartBarSquare" iconName="Dashboard" to="" />
          <Route icon="Banknotes" iconName="Transection" to="transection" />
          <Route icon="UserIcon" iconName="Profile" to="profile" />
        </div> */}

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
    </motion.aside>
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

export default SidebarM;
