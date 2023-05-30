import React from "react";
import Menu from "./Menu";

function Sidebar() {
  return (
    <div className="z-30 fixed flex px-6 py-5 lg:py-10 bg-darkGrey border-2 border-blue-500 rounded-3xl bottom-10 left-5 right-0 mr-5 lg:border-0 lg:flex-col lg:right-auto lg:left-auto lg:bottom-auto lg:w-[18%] lg:min-h-[60%]">
      <div className="hidden lg:block">
        <div className="w-24 h-24 bg-blue-500 rounded-full"></div>
        <h1 className="font-semibold mt-6">Jhon Doe</h1>
        <p className="text-sm text-gray-400">Officer</p>
      </div>
      <Menu />
    </div>
  );
}

export default Sidebar;
