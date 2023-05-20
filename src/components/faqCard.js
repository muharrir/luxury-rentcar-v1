"use client";
import React, { useState } from "react";
import IconDown from "../../public/assets/svgs/ic-down.svg";
import IconUp from "../../public/assets/svgs/ic-up.svg";
import Image from "next/image";

function FaqCard() {
  const [tekan, setTekan] = useState(false);

  const showDropDown = () => {
    setTekan(!tekan);
  };

  return (
    <div
      className={`rounded-3xl border border-gray-400 py-4 px-6 md:px-10 text-start cursor-pointer ${
        tekan == false ? "h-min" : "h-auto"
      }`}
      onClick={showDropDown}
    >
      <div className="flex justify-between">
        <h1 className="font-semibold">What if I crash the car?</h1>
        {tekan == true ? (
          <Image src={IconDown} className="rotate-180" alt="Icon Up" />
        ) : (
          <Image src={IconDown} alt="Icon Down" />
        )}
      </div>
      <div className={`${tekan == false ? "hidden" : "pt-4"}`}>
        <h2>
          Lorem ipsum dolor sit amet consec, adipisicing elit. Doloribus
          voluptates corporis quasi harum odio rem.
        </h2>
      </div>
    </div>
  );
}

export default FaqCard;
