import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function MenuProfile() {
  const menuProfile = [
    { id: 1, text: "Transaction", href: "/transaction" },
    { id: 2, text: "Deposits", href: "/deposits" },
    { id: 3, text: "Rewards", href: "/rewards" },
    { id: 4, text: "Settings", href: "/settings" },
  ];

  const handleClick = () => {
    localStorage.clear();
    window.location = "/";
  };

  const pathname = usePathname();
  return (
    <div className="space-y-2 md:space-y-3 text-gray-400 ">
      {menuProfile.map((v, i) => (
        <div key={i}>
          <Link href={v.href}>
            <h3
              className={`hover:text-black ${
                pathname == v.href
                  ? "font-medium text-black hover:text-gray-400"
                  : "text-gray-400"
              }`}
            >
              {v.text}
            </h3>
          </Link>
        </div>
      ))}
      <h4 className="hover:text-black" onClick={handleClick}>
        Log Out
      </h4>
    </div>
  );
}

export default MenuProfile;

{
  /* <Link href={"/profile"}>
        <h3 className="hover:text-black">Profile</h3>
      </Link>
      <Link href={"/profile"}>
        <h3 className="hover:text-black">Transaction</h3>
      </Link>
      <Link href={"/profile"}>
        <h3 className="hover:text-black">Rewards</h3>
      </Link>
      <Link href={"/settings"}>
        <h3 className="hover:text-black">Settings</h3>
      </Link>
      <h3 className="hover:text-black" onClick={handleClick}>
        Log Out
      </h3> */
}
