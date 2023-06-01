import CardThumbnail from "@/components/cardThumbnail";
import React from "react";
import carousel from "../../../../data/carousel.json";
import specData from "../../../../data/specData.json";

export const metadata = {
  title: {
    absolute: "GR YARIS",
  },
  description: "This is a Details Page from Luxury Rent Car",
};

function page() {
  return (
    <div className="bg-darkGrey mt-4 px-6 py-10 md:py-14 md:mt-12 md:px-10 lg:px-32  flex flex-col">
      <CardThumbnail
        carousel={carousel.yaris}
        specData={specData.yaris.spec}
        brand={specData.yaris.brand}
        typeHeader={specData.yaris.typeHeader}
        typeCar={specData.yaris.typeCar}
        price={specData.yaris.price}
      />
    </div>
  );
}

export default page;
