import React from "react";
import { AccountToggle } from "./AccountToggle";
import RouteSelect from "./RouteSelect";

const Sidebar = () => {
  return (
    <div className="">
      <div>
        <AccountToggle />
        <RouteSelect />
      </div>
      {/* Plan Toggle */}
    </div>
  );
};

export default Sidebar;
