import PopularCard from "@/components/molecules/popularCard";
import recommenCar from "../../../data/recommenCar.json";
import React from "react";

export default function PopularCars() {
  return (
    <section className="py-10 lg:py-[100px] px-6 md:px-10 lg:px-28 bg-darkGrey">
      {/* Title */}
      <div className="sm:space-y-1 md:space-y-2">
        <h2 className="text-2xl md:text-[26px] font-bold">Popular Cars</h2>
        <p className="text-sm md:text-base text-gray-400">Start your big day</p>
      </div>
      <div className="grid grid-rows-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {recommenCar.toyota.map((v, i) => (
          <PopularCard
            title={v.title}
            brand={v.brand}
            img={v.img}
            alt={v.title}
            price={v.price}
            href={v.href}
            key={i}
          />
        ))}
      </div>
    </section>
  );
}
