"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React, { useState } from "react";

function Header() {
  const navs = [
    { text: "Home", href: "/" },
    { text: "Catalog", href: "/catalog" },
    { text: "Stories", href: "/stories" },
    { text: "Maps", href: "/maps" },
  ];

  const pathname = usePathname();
  const [clickHamburger, setClickHamburger] = useState(false);
  const funcClickHamburger = () => {
    setClickHamburger(!clickHamburger);
  };

  const getEmail = localStorage.getItem("emailData");
  const getPassword = localStorage.getItem("passwordData");

  return (
    <nav className="relative z-50 my-6 md:my-10 mx-6 md:mx-10 lg:mx-32">
      <div className="flex items-center justify-between">
        {/* LOGO */}
        <Link href={"/"}>
          <h1 className="font-bruno font-bold text-2xl md:text-3xl cursor-pointer">
            LUXURY
          </h1>
        </Link>
        {/* MENU ITEM */}
        <ul className="hidden md:flex md:gap-8 lg:gap-16 mt-3 ">
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
              {pathname == v.href ? (
                <div className="mt-2 h-1 w-7 bg-black rounded-full"></div>
              ) : (
                <div className="mt-2 h-1 w-7 bg-transparent"></div>
              )}
            </li>
          ))}
        </ul>
        {/* LOGIN Button */}
        {getEmail && getPassword ? (
          <div
            className="w-10 h-10 rounded-full bg-blue-500"
            onClick={funcClickHamburger}
          ></div>
        ) : (
          <div
            className={`${
              pathname == "/login" ? "hidden" : "hidden md:block"
            } `}
          >
            <Link
              href={"/login"}
              className="border border-gray-300 px-9 py-4 rounded-full  font-semibold hover:bg-indigo-950 hover:border-0 hover:text-white "
            >
              Log In
            </Link>
          </div>
        )}

        {/* HAMBURGER BUTTON */}
        <button
          className="block md:hidden absolute right-0"
          onClick={funcClickHamburger}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 9h16.5m-16.5 6.75h16.5"
            />
          </svg>
        </button>

        {/* Mobile View */}
        <div
          className={`md:hidden ${clickHamburger == true ? "block" : "hidden"}`}
        >
          <div className="absolute flex flex-col bg-gray-100 left-1/2 right-0 mt-6 rounded-2xl px-6 py-4">
            <ul className="space-y-2">
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
                </li>
              ))}
              <div>
                <Link
                  href={"/login"}
                  className={`hover:text-black ${
                    pathname == "/login" ? "hidden" : "text-gray-400"
                  }`}
                >
                  Log In
                </Link>
              </div>
            </ul>
          </div>
        </div>

        {/* Account Nav  */}
        {/* <div className={`${clickHamburger == true ? "block" : "hidden"}`}>
          <div className="absolute flex flex-col bg-gray-100 left-[85%] right-0 mt-10 rounded-2xl px-6 py-4">
            <ul className="space-y-2">
              <div>
                <h3>Log Out</h3>
              </div>
            </ul>
          </div>
        </div> */}
      </div>
    </nav>
  );
}

export default Header;
