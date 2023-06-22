import React from "react";
import Faq from "@/components/organisms/Faq";
import PopularCars from "@/components/organisms/PopularCars";

export const metadata = {
  title: { default: "Details", template: "%s" },
  description: "Generated by create next app",
};

function DetailsLayout({ children }) {
  return (
    <div>
      {children}
      <Faq />
      <PopularCars />
    </div>
  );
}

export default DetailsLayout;
