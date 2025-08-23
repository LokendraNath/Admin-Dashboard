import React from "react";
import { Stats } from "./Stats";
import { ActivityGraph } from "./ActivityGraph";
import { UsageRadar } from "./UsageRadar";
import { RecentTransaction } from "./RecentTransaction";

const Grid = () => {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-12">
        <Stats />
      </div>
      <div className="col-span-8">
        <ActivityGraph />
      </div>
      <div className="col-span-4">
        <UsageRadar />
      </div>
      {/* <div className="col-span-12">
        <RecentTransaction />
      </div> */}
    </div>
  );
};

export default Grid;
