import { useContext } from "react";
import { SidebarContext } from "../Layout/Layout";
import { ChevronDoubleRightIcon } from "@heroicons/react/16/solid";
import profileImage from "@assets/pfp-lokendra2.png";

const Header = () => {
  const { expanded, setExpanded } = useContext(SidebarContext);

  return (
    <div className="w-full h-15 flex bg-white mb-2 shadow-xl px-10 items-center justify-between">
      <ChevronDoubleRightIcon
        className="cursor-pointer"
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
