import { useContext } from "react";
import { SidebarContext } from "../Layout";
import { ChevronDoubleRightIcon } from "@heroicons/react/16/solid";
import profileImage from "/assets/pfp-lokendra2.png";

const Header = () => {
  const { expanded, setExpanded } = useContext(SidebarContext);

  return (
    <div className="sticky top-0 w-full h-15 lg:h-17 flex overflow-hidden z-40 bg-white ow-lg px-10 items-center justify-between">
      <ChevronDoubleRightIcon
        className="cursor-pointer lg:hidden"
        width={30}
        onClick={() => setExpanded(!expanded)}
      />
      <h1 className="text-2xl font-revalia">CapitalEdge</h1>
      <img
        src={profileImage}
        className="h-10 w-10 object-cover rounded-full"
        alt=""
      />
    </div>
  );
};
export default Header;
