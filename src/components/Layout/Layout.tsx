import React, { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar, { SidebareIcon } from "../Sidebar/Sidebar";
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

interface SidebarContextType {
  expanded: boolean;
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SidebarContext = createContext<SidebarContextType>({
  expanded: true,
  setExpanded: () => {},
});

const Layout = () => {
  const [expanded, setExpanded] = useState<boolean>(true);

  return (
    <div className="min-h-screen bg-gray-100">
      <main
        className={`min-h-full gap-4 grid font-josefin ${
          expanded ? "grid-cols-[auto_1fr]" : "grid-cols-[auto_1fr]"
        }`}
      >
        <SidebarContext.Provider value={{ expanded, setExpanded }}>
          <Sidebar>
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
          </Sidebar>
        </SidebarContext.Provider>
        <div className="overflow-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
