import React, { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar, { SidebareIcon } from "../Sidebar/Sidebar";
import SidebarM from "../Sidebar/SidebarM";
import Header from "../Header/Header";

interface SidebarContextType {
  expanded: boolean;
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SidebarContext = createContext<SidebarContextType>({
  expanded: false,
  setExpanded: () => {},
});

const Layout = () => {
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <SidebarContext.Provider value={{ expanded, setExpanded }}>
      {/* =========Desktop Grid=============== */}
      <div className="hidden lg:flex flex-col">
        <Header />
        <div className="h-screen bg-gray-100 overflow-hidden">
          {/* Sidebar */}
          <Sidebar />
          <main className=" ml-57 mt-2 overflow-y-auto gap-2 lg:gap-4 grid font-josefin">
            <div className="overflow-auto">
              <Outlet />
            </div>
          </main>
        </div>
      </div>

      {/* ========= Mobile =============== */}
      <div className="lg:hidden min-h-screen bg-gray-100">
        {/* For Desktop */}
        <Header />
        <SidebarM />
        <main className="min-h-full gap-2 lg:gap-4 grid font-josefin">
          <div className="overflow-auto">
            <Outlet />
          </div>
        </main>
        {/* For Mobile */}
        <SidebarM />
      </div>
    </SidebarContext.Provider>
  );
};

export default Layout;
