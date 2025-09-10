import { type ReactNode, useContext } from "react";
import {
  BanknotesIcon,
  BuildingStorefrontIcon,
  Cog6ToothIcon,
  InboxStackIcon,
  PresentationChartLineIcon,
  QuestionMarkCircleIcon,
  UserCircleIcon,
} from "@heroicons/react/16/solid";
import { NavLink } from "react-router-dom";
import { SidebarContext } from "../Layout/Layout";

interface SidebarProps {
  children?: ReactNode;
}

const Sidebar = ({ children }: SidebarProps) => {
  const { expanded, setExpanded } = useContext(SidebarContext);

  return (
    <aside className="fixed w-56 bg-white h-full overflow-y-auto left-0 flex-none box-border shadow-lg">
      <nav className="h-full flex flex-col justify-between p-2">
        <ul
          className={`mt-5 flex-1 py-2 space-y-2 ${expanded ? "px-4" : "px-2"}`}
        >
          <NavLink
            to="/"
            onClick={() => setExpanded(!expanded)}
            end
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
        </ul>
      </nav>
    </aside>
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

export default Sidebar;
