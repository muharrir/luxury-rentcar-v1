import Image from "next/image";
import React from "react";

function IconCard({ image, title, subtitle }) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-16 h-16 bg-indigo-950 rounded-3xl justify-center items-center flex">
        <Image src={image} />
      </div>
      <div>
        <h1 className="text-lg font-bold">{title}</h1>
        <p className="text-sm text-gray-500">{subtitle}</p>
      </div>
    </div>
  );
}

export default IconCard;
