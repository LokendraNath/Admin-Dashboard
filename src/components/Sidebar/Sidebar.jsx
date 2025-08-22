import React from "react";
import { AccountToggle } from "./AccountToggle";
import { Search } from "./Search";

const Sidebar = () => {
  return (
    <div className="overflow-y-scroll top-4 sticky h-[calc(100vh - 32px - 48px)]">
      <div>
        <AccountToggle />
        <Search />
      </div>
      {/* Plan Toggle */}
    </div>
  );
};

export default Sidebar;
