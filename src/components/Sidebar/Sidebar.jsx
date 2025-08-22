import React from "react";
import { AccountToggle } from "./AccountToggle";
import RouteSelect from "./RouteSelect";

const Sidebar = () => {
  return (
    <div className="sticky h-[calc(100vh - 32px - 48px)]">
      <div>
        <AccountToggle />
        <RouteSelect />
      </div>
      {/* Plan Toggle */}
    </div>
  );
};

export default Sidebar;
