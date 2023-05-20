import CardThumbnail from "@/components/cardThumbnail";
import React from "react";
import carousel from "../../../data/carousel.json";
import specData from "../../../data/specData.json";

export const metadata = {
  title: {
    absolute: "New Corolla GR",
  },
  description: "This is a Details Page from Luxury Rent Car",
};

function CorollaGR() {
  return (
    <div className="bg-darkGrey mt-4 px-6 py-10 md:py-14 md:mt-12 md:px-10 lg:px-32  flex flex-col">
      <CardThumbnail
        carousel={carousel.corolla}
        specData={specData.corolla.spec}
        brand={specData.corolla.brand}
        typeHeader={specData.corolla.typeHeader}
        typeCar={specData.corolla.typeCar}
        price={specData.corolla.price}
      />
    </div>
  );
}

export default CorollaGR;
