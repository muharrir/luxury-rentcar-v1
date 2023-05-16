import Image from "next/image";
import React from "react";
import Ferari from "../../public/assets/images/ferari.jpg";

function PopularCard() {
  return (
    <div className="bg-white rounded-2xl px-5 py-5">
      <h3 className="text-lg font-bold">BMW 320</h3>
      <p className="text-sm text-gray-400">Sport Car</p>
      <div>
        <Image
          src={Ferari}
          className="mt-4 rounded-2xl object-cover h-[150px]"
        />
      </div>
      <div className="mt-2">
        <h3 className="text-base font-bold text-blue-800">
          Rp.800.000
          <span className="text-gray-400 text-sm font-normal">/day</span>
        </h3>
      </div>
    </div>
  );
}

export default PopularCard;
