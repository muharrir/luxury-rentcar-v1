"use client";
import React from "react";
import Illustration from "./illustration";
import DetailsSpec from "./detailsSpec";

export default function Hero() {
  return (
    <section className="mx-4 md:mx-10 lg:mx-40">
      <div className="container relative pt-5 pb-20 md:pt-5 md:pb-[90px]">
        <div className=" flex flex-col items-center justify-center">
          <Illustration />
          <DetailsSpec />
        </div>
      </div>
    </section>
  );
}
