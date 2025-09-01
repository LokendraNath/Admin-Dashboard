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
    </div>
  );
};

export default Sidebar;
