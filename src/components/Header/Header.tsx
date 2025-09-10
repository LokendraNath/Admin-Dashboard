import { useContext } from "react";
import { SidebarContext } from "../Layout/Layout";
import {
  ChevronDoubleRightIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/16/solid";
import profileImage from "@assets/pfp-lokendra2.png";

const Header = () => {
  const { expanded, setExpanded } = useContext(SidebarContext);

  return (
    <div className="sticky top-0 w-full h-15 lg:h-17 flex bg-white shadow-lg px-10 items-center justify-between">
      <ChevronDoubleRightIcon
        className="cursor-pointer lg:hidden"
        width={30}
        onClick={() => setExpanded(!expanded)}
      />
      <h1 className="text-2xl font-revalia">CapitalEdge</h1>
      <button className=" py-2 rounded-full px-2 bg-black">
        <MoonIcon width={20} className="text-white" />
      </button>
      <SunIcon width={20} />
    </div>
  );
};
export default Header;
