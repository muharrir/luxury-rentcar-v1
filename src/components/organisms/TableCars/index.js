import React from "react";
import HeadCars from "./HeadCars";
import BodyCars from "./BodyCars";
import car from "@/data/car.json";

export default function TableCars() {
  return (
    <table class="w-full text-sm text-left text-gray-500">
      {/* Table Head */}
      <HeadCars />
      {/* Table Body  */}
      {car.map((v, i) => (
        <BodyCars
          id={v.id}
          brand={v.brand}
          title={v.title}
          price={v.price}
          key={v.id}
        />
      ))}
    </table>
  );
}
