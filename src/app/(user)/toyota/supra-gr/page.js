import CardThumbnail from "@/components/cardThumbnail";
import React from "react";
import carousel from "../../../../data/carousel.json";
import specData from "../../../../data/specData.json";

export const metadata = {
  title: {
    absolute: "New Supra GR",
  },
  description: "This is a Details Page from Luxury Rent Car",
};

function SupraGR() {
  return (
    <div className="bg-darkGrey mt-4 px-6 py-10 md:py-14 md:mt-12 md:px-10 lg:px-32  flex flex-col">
      <CardThumbnail
        carousel={carousel.supra}
        specData={specData.supra.spec}
        brand={specData.supra.brand}
        typeHeader={specData.supra.typeHeader}
        typeCar={specData.supra.typeCar}
        price={specData.supra.price}
      />
    </div>
  );
}

export default SupraGR;
