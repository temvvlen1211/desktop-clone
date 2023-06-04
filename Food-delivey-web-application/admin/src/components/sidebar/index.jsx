/* eslint-disable */

import { HiX } from "react-icons/hi";
import Links from "./components/Links";

import routes from "routes.js";
import Logo from "components/icons/Logo";
import Flogo from "components/icons/Flogo";

const Sidebar = ({ open, onClose, darkmode }) => {
  return (
    <div
      className={`sm:none duration-175 linear fixed !z-50 flex min-h-full flex-col bg-white  pb-10 shadow-2xl shadow-white/5 transition-all dark:!bg-navy-800 dark:text-white md:!z-50 lg:!z-50 xl:!z-0 ${
        open ? "translate-x-0" : "-translate-x-96"
      }`}
    >
      <span
        className="absolute top-4 right-4 block cursor-pointer xl:hidden"
        onClick={onClose}
      >
        <HiX />
      </span>

      <div className={`mx-[56px] mt-[50px] flex items-center`}>
        <div className="    text-[26px] font-bold uppercase text-navy-700 dark:text-white">
          {darkmode ? <Flogo /> : <Logo />}
        </div>
      </div>
      <div class="mt-[20px] mb-7 h-px bg-gray-300 dark:bg-white/30" />

      <ul className="mb-auto pt-1">
        <Links routes={routes} />
      </ul>
    </div>
  );
};

export default Sidebar;
