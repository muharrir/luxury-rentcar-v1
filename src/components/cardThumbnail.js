import Image from "next/image";
import React from "react";

function CardThumbnail({ img, onClick }) {
  return (
    <div className="mt-10 gap-8 grid grid-cols-12">
        <div className="bg-white col-span-8  p-4 rounded-3xl">
          <Image src={Supra1} className="rounded-3xl object-cover w-full" />
          <div className="grid grid-cols-4 gap-4 mt-4">
            <Image src={Supra1} className="rounded-3xl h-full" />
            <Image src={Supra2} className="rounded-3xl h-full" />
            <Image src={Supra3} className="rounded-3xl h-full" />
            <Image src={Supra4} className="rounded-3xl h-full" />
          </div>
        </div>
        <div className="bg-white col-span-4 p-6 rounded-3xl space-y-2">
          <div className="flex justify-between items-start">
            <h1 className="text-2xl font-semibold">
              New Toyota <br /> Supra GR
            </h1>
            <Image src={LogoGR} className="w-[50px]" />
          </div>
          <p className="text-gray-400">Toyota</p>
          <hr />
          <div className="flex items-center gap-4">
            <div className="h-8 w-8 rounded-full bg-blue-900"></div>
            <h4>255 Horse Power</h4>
          </div>
          <div className="flex items-center gap-4">
            <div className="h-8 w-8 rounded-full bg-blue-900"></div>
            <h4>2 Seats</h4>
          </div>
          <div className="flex items-center gap-4">
            <div className="h-8 w-8 rounded-full bg-blue-900"></div>
            <h4>Supercharger Twin Scroll Turbo</h4>
          </div>
          <div className="flex items-center gap-4">
            <div className="h-8 w-8 rounded-full bg-blue-900"></div>
            <h4>8 Speeds AT</h4>
          </div>
        </div>
      </div>
  );
}

export default CardThumbnail;
