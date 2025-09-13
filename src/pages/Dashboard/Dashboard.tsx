import React from "react";
import Topbar from "./components/Topbar";
import Grid from "./components/Grid";

const Dashboard = () => {
  return (
    <div className="bg-white dark:bg-[#1D202B] dark:text-white pb-4 rounded-xl shadow-2xl min-h-full px-4">
      <Topbar />
      <Grid />
    </div>
  );
};

export default Dashboard;
