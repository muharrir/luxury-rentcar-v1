import React from "react";
import PopularCard from "@/components/molecules/popularCard";
import recommenCar from "../../../data/recommenCar.json";

export const metadata = {
  title: "Catalog",
  description: "This is a Catalog Page from Luxury Rent Car",
};

function Catalog() {
  return (
    <div className="mx-32 mt-20 grid grid-cols-4 gap-10">
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
  );
}

export default Catalog;
