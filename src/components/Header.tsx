import { useContext } from "react";
import { SidebarContext } from "../Layout";
import {
  ChevronDoubleRightIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/16/solid";
import profileImage from "/assets/pfp-lokendra2.png";
import { useThemeStore } from "@/store/store";

const Header = () => {
  const { expanded, setExpanded } = useContext(SidebarContext);
  const { theme, toggleTheme } = useThemeStore();

  return (
    <div className="sticky top-0 w-full h-15 lg:h-17 flex overflow-hidden z-40 bg-white dark:bg-[#1D202B] ow-lg px-10 items-center justify-between dark:text-white">
      <ChevronDoubleRightIcon
        className="cursor-pointer lg:hidden"
        width={30}
        onClick={() => setExpanded(!expanded)}
      />
      <h1 className="text-2xl font-revalia">CapitalEdge</h1>
      <button onClick={toggleTheme}>
        {theme === "light" ? (
          <MoonIcon className="cursor-pointer" width={25} />
        ) : (
          <SunIcon className="cursor-pointer" width={25} />
        )}
      </button>
    </div>
  );
};
export default Header;
