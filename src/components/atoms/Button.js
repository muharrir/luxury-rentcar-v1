import Link from "next/link";
import React from "react";

export default function Button({ href }) {
  return (
    <button>
      <Link
        href={href}
        className="border border-gray-300 px-9 py-4 rounded-full font-semibold hover:bg-indigo-950 hover:border-none hover:text-white "
      >
        Log In
      </Link>
    </button>
  );
}
