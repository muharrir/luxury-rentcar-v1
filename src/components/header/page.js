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
    <nav className="my-6 md:my-10 flex items-center justify-between z-10 mx-6 md:mx-10 lg:mx-40">
      <Link href={"/"}>
        <h1 className="font-bruno font-bold text-2xl md:text-3xl cursor-pointer">
          LUXURY
        </h1>
      </Link>
      <ul className="hidden md:flex gap-20 mt-3 ">
        {navs.map((v, i) => (
          <li key={i}>
            <Link
              href={v.href}
              className={`hover:text-black ${
                pathname == v.href
                  ? "font-medium hover:text-gray-400"
                  : "text-gray-400"
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
      <div
        className={`${pathname == "/login" ? "hidden" : "hidden md:block"} `}
      >
        <Link
          href={"/login"}
          className="border border-gray-300 px-9 py-4 rounded-full  font-semibold hover:bg-indigo-950 hover:border-0 hover:text-white "
        >
          Log In
        </Link>
      </div>
      <button className="block md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 9h16.5m-16.5 6.75h16.5"
          />
        </svg>
      </button>
    </nav>
  );
}

export default Header;
