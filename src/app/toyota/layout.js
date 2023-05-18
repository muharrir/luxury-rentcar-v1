import FaqCard from "@/components/faqCard";
import PopularCard from "@/components/popularCard";
import React from "react";

function Toyota({ children }) {
  const similarCars = [
    {
      id: 1,
      title: "Supra GR",
      brand: "Toyota",
      img: "/assets/images/supra2.jpg",
      price: "950.000",
      href: "/toyota/supra-gr",
    },
    {
      id: 2,
      title: "Supra GR 2",
      brand: "Toyota",
      img: "/assets/images/supra1.jpg",
      price: "500.000",
      href: "/toyota/supra-gr",
    },
    {
      id: 3,
      title: "Supra GR 3",
      brand: "Toyota",
      img: "/assets/images/supra3.jpg",
      price: "1.00.000",
      href: "/toyota/rush-gr",
    },
    {
      id: 4,
      title: "Ionic 5",
      brand: "Hyundai",
      img: "/assets/images/supra4.jpg",
      price: "1.200.000",
      href: "/toyota/rush-gr",
    },
  ];
  return (
    <div>
      {children}
      <section className="md:text-center mx-6 my-10 md:mx-10 lg:my-[100px]">
        <h1 className="text-xl md:text-[26px] font-bold">
          Frequently Asked Questions
        </h1>
        <p className="mt-2 text-sm md:text-base text-gray-400">
          Learn more about Luxury and get a success
        </p>
        <div className="mt-14 grid grid-rows-1 md:grid-cols-2 lg:mx-80 md:gap-x-4 lg:gap-x-8 gap-y-4 ">
          <FaqCard />
          <FaqCard />
          <FaqCard />
          <FaqCard />
          <FaqCard />
          <FaqCard />
        </div>
      </section>
      <section className="py-10 lg:py-[100px] px-6 md:px-10 lg:px-28 bg-darkGrey">
        {/* Title */}
        <div className="sm:space-y-1 md:space-y-2">
          <h2 className="text-2xl md:text-[26px] font-bold">Similar Cars</h2>
          <p className="text-sm md:text-base text-gray-400">
            Start your big day
          </p>
        </div>
        <div className="grid grid-rows-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {similarCars.map((v, i) => (
            <PopularCard
              title={v.title}
              brand={v.brand}
              img={v.img}
              price={v.price}
              href={v.href}
              key={i}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Toyota;
