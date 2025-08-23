import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="min-h-screen gap-4 p-4 grid grid-cols-[260px_1fr] font-josefin">
        <Sidebar />
        <div className="overflow-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
