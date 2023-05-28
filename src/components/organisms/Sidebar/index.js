import React from "react";
import Menu from "./Menu";

function Sidebar() {
  return (
    <div className="w-[25%] h-[60%] px-6 py-10 bg-darkGrey rounded-3xl">
      <div className="w-24 h-24 bg-blue-500 rounded-full"></div>
      <h1 className="font-semibold mt-6">Jhon Doe</h1>
      <p className="text-sm text-gray-400">Officer</p>
      <Menu />
    </div>
  );
}

export default Sidebar;
