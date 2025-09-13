import React, { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import SidebarM from "./components/Sidebar/SidebarM";
import Header from "./components/Header";
import { useAuthStore, useThemeStore } from "./store/store";
import Login from "./components/Login";

interface SidebarContextType {
  expanded: boolean;
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SidebarContext = createContext<SidebarContextType>({
  expanded: false,
  setExpanded: () => {},
});

const Layout = () => {
  const { isAuthenticated, initilizeAuth } = useAuthStore();
  const [expanded, setExpanded] = useState<boolean>(false);

  const { theme } = useThemeStore();

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    initilizeAuth();
  }, [initilizeAuth]);

  if (!isAuthenticated) {
    return <Login />;
  }

  return (
    <SidebarContext.Provider value={{ expanded, setExpanded }}>
      {/* =========Desktop Grid=============== */}
      <div className="hidden lg:flex flex-col">
        <Header />
        <div className="h-screen bg-gray-100 overflow-hidden dark:bg-[#292D32]">
          {/* Sidebar */}
          <Sidebar />
          <main className=" ml-57 mt-2 overflow-y-auto gap-2 lg:gap-4 grid font-josefin">
            <div className="overflow-auto  rounded-xl bg-white dark:bg-[#1D202B] text-black dark:text-white">
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
