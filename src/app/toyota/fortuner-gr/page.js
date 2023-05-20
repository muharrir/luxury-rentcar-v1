import CardThumbnail from "@/components/cardThumbnail";
import React from "react";
import carousel from "../../../data/carousel.json";
import specData from "../../../data/specData.json";

export const metadata = {
  title: {
    absolute: "New Fortuner GR",
  },
  description: "This is a Details Page from Luxury Rent Car",
};

function FortunerGR() {
  return (
    <div className="bg-darkGrey mt-4 px-6 py-10 md:py-14 md:mt-12 md:px-10 lg:px-32  flex flex-col">
      <CardThumbnail
        carousel={carousel.fortuner}
        specData={specData.fortuner.spec}
        brand={specData.fortuner.brand}
        typeHeader={specData.fortuner.typeHeader}
        typeCar={specData.fortuner.typeCar}
        price={specData.fortuner.price}
      />
    </div>
  );
}

export default FortunerGR;
