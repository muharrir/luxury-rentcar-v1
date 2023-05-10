"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";

function Header() {
  const navs = [
    { text: "Home", href: "/" },
    { text: "Catalog", href: "/catalog" },
    { text: "Stories", href: "/stories" },
  ];

  const pathname = usePathname();

  return (
    <nav className="my-10 flex items-center justify-between  z-10">
      <Link href={"/"}>
        <h1 className="font-bruno font-bold text-3xl cursor-pointer">LUXURY</h1>
      </Link>
      <ul className="flex gap-20 mt-3 ">
        {navs.map((v, i) => (
          <li key={i}>
            <Link
              href={v.href}
              className={`hover:text-gray-400 ${
                pathname == v.href ? "font-medium" : ""
              }`}
            >
              {v.text}
            </Link>
            <div
              className={`${
                pathname == v.href ? "mt-2 h-1 w-7 bg-black rounded-full" : ""
              }`}
            ></div>
          </li>
        ))}
      </ul>
      <div className="flex">
        <button className="border border-gray-300 px-9 py-4 rounded-full  font-semibold hover:bg-indigo-950 hover:border-0 hover:text-white ">
          Log In
        </button>
      </div>
    </nav>
  );
}

export default Header;
