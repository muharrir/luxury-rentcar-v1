"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

function LoginButton() {
  const [clickAvatar, setClickAvatar] = useState(false);
  const funcClickAvatar = () => {
    setClickAvatar(!clickAvatar);
  };

  const getEmail = localStorage.getItem("emailData");
  const getPassword = localStorage.getItem("passwordData");
  const handleClick = () => {
    localStorage.clear();
    window.location = "/";
  };

  const pathname = usePathname();
  return (
    <>
      {getEmail && getPassword ? (
        <div className="flex items-center md:w-10 lg:w-[160px]">
          <h1 className="hidden lg:block text-sm absolute left-[87%] text-gray-400">
            Hello, <br />{" "}
            <span className="text-base font-semibold text-black">
              Muharrir Arel
            </span>
          </h1>
          <div
            className="absolute lg:relative w-8 h-8 md:w-12 md:h-12 rounded-full bg-blue-500 cursor-pointer right-0 lg:left-28"
            onClick={funcClickAvatar}
          >
            {/* Account Nav  */}
            <div className={`${clickAvatar == true ? "block" : "hidden"}`}>
              <div className="absolute flex flex-col bg-gray-100 mt-10 md:mt-16 rounded-2xl px-4 md:px-6 py-4 md:-left-[135px] right-0 w-40 md:w-44">
                <ul>
                  <div className="space-y-2 text-gray-400 ">
                    <Link href={"/profile"}>
                      <h3 className="hover:text-black">Profile</h3>
                    </Link>
                    <h3 className="hover:text-black">My Transaction</h3>
                    <h3 className="hover:text-black" onClick={handleClick}>
                      Log Out
                    </h3>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : (
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
      )}
    </>
  );
}

export default LoginButton;
