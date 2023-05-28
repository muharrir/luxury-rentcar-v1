import Link from "next/link";
import React from "react";
import Hamburger from "./Hamburger";
import ProfileMenu from "./ProfileMenu";
import Menu from "./Menu";

export default function Navbar() {
  return (
    <nav className="relative my-6 mx-6 md:my-10 md:mx-10 lg:mx-32">
      <div className="flex items-center justify-between">
        <Hamburger />

        <Link href={"/"}>
          <h1 className="font-bruno font-bold cursor-pointer text-2xl md:text-3xl">
            LUXURY
          </h1>
        </Link>

        <div className="absolute left-[50%] -ml-28 lg:-ml-52 hidden md:block">
          <Menu />
        </div>

        <ProfileMenu />
      </div>
    </nav>
  );
}
