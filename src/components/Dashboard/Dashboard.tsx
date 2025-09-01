import React from "react";
import Topbar from "./Topbar";
import { Stats } from "./Stats";
import Grid from "./Grid";

const Dashboard = () => {
  return (
    <div className="bg-white rounded-lg pb-4 shadow-2xl min-h-full px-4">
      <Topbar />
      <Grid />
    </div>
  );
};

export default Dashboard;
