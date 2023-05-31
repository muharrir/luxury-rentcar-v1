"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import IconSettings from "./IconSettings";
import IconDeposits from "./IconDeposits";
import IconRewards from "./IconRewards";
import IconPayment from "./IconPayment";

export default function Menu() {
  const pathname = usePathname();

  const sidenavs = [
    {
      id: 1,
      image: <IconPayment />,
      text: "Transaction",
      href: "/transaction",
    },
    {
      id: 2,
      image: <IconDeposits />,
      text: "Deposits",
      href: "/deposits",
    },
    {
      id: 3,
      image: <IconRewards />,
      text: "Rewards",
      href: "/rewards",
    },
    {
      id: 4,
      image: <IconSettings />,
      text: "Settings",
      href: "/settings",
    },
  ];
  return (
    <ul className="flex justify-between w-full lg:flex-col lg:mt-12 lg:space-x-0 lg:space-y-8">
      {sidenavs.map((v, i) => (
        <li key={i}>
          <Link
            href={v.href}
            className={`flex items-center gap-4  ${
              pathname == v.href
                ? "text-indigo-950 font-semibold fill-blue-500 "
                : "text-gray-400 fill-gray-400/80"
            }`}
          >
            <div
              className={`${
                pathname == v.href ? "animate-bounce" : "animate-none"
              }`}
            >
              {v.image}
            </div>
            <h3 className="hidden lg:block">{v.text}</h3>
          </Link>
        </li>
      ))}
    </ul>
  );
}
