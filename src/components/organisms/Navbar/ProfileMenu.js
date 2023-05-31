"use client";
import Button from "@/components/atoms/Button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import MenuProfile from "./MenuProfile";

export default function ProfileMenu() {
  const [clickAva, setClickAva] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const checkifClickedOutside = (e) => {
      if (clickAva && ref.current && !ref.current.contains(e.target))
        setClickAva(false);
    };
    document.addEventListener("click", checkifClickedOutside);
    return () => {
      document.removeEventListener("click", checkifClickedOutside);
    };
  }, [clickAva]);

  const pathname = usePathname();

  const getEmail = localStorage.getItem("emailData");
  const getPassword = localStorage.getItem("passwordData");

  return (
    <>
      {getEmail && getPassword ? (
        <div className="flex items-center  w-10 md:w-10 lg:w-[160px]">
          <h1 className="hidden lg:block text-sm absolute left-[87%] text-gray-400">
            Hello, <br />{" "}
            <span className="text-base font-semibold text-black capitalize">
              jhon doe
            </span>
          </h1>
          <div
            className="absolute lg:relative w-8 h-8 md:w-12 md:h-12 rounded-full bg-blue-500 cursor-pointer right-0 lg:left-28"
            onClick={() => setClickAva(!clickAva)}
            ref={ref}
          >
            {clickAva && (
              <div className="absolute flex flex-col z-20 bg-gray-100 mt-12 md:mt-16 rounded-2xl px-4 md:px-6 py-4 md:-left-[135px] right-0 w-36 md:w-44">
                <div className="space-y-2 text-gray-400 ">
                  <MenuProfile />
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div
          className={`${pathname == "/login" ? "hidden" : "w-10 md:w-auto"} `}
        >
          <div className="hidden md:block">
            <Button href={"/login"} />
          </div>
        </div>
      )}
    </>
  );
}
