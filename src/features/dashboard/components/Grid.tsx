import React from "react";
import { Stats } from "./Stats";
import { ActivityGraph } from "./charts/ActivityGraph";
import { UsageRadar } from "./charts/UsageRadar";

const Grid = () => {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-12">
        <Stats />
      </div>
      <div className="col-span-12 md:col-span-8">
        <ActivityGraph />
      </div>
      <div className="hidden md:block col-span-4">
        <UsageRadar />
      </div>
    </div>
  );
};

export default Grid;
