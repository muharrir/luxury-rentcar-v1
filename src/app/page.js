"use client";
import Image from "next/image";
import Mercy from "../../public/assets/images/mercy.png";
import MercyCrop from "../../public/assets/images/mercy-crop.png";
import { motion } from "framer-motion";
import PopularCard from "@/components/popularCard";
import Illustration from "../../public/assets/images/illustration1.png";
import IconCar from "../../public/assets/svgs/ic-car.svg";
import IconPrice from "../../public/assets/svgs/ic-card.svg";
import IconSecurity from "../../public/assets/svgs/ic-securityuser.svg";
import IconTrade from "../../public/assets/svgs/ic-convert.svg";

import IconCard from "@/components/iconCard";
import Link from "next/link";
import FaqCard from "@/components/faqCard";

export default function Home() {
  const popularCars = [
    {
      id: 1,
      title: "Supra GR",
      brand: "Toyota",
      img: "/assets/images/supra1.jpg",
      price: "800.000",
      href: "/toyota/supra-gr",
    },
    {
      id: 2,
      title: "Supra GR 2",
      brand: "Toyota",
      img: "/assets/images/supra2.jpg",
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
    <>
      <div className="mx-4 md:mx-10 lg:mx-40">
        <section className="container relative pt-5 pb-20 md:pt-5 md:pb-[90px]">
          <div className=" flex flex-col items-center justify-center">
            <div className="relative items-center">
              {/* Text Behind Image */}
              <div className="absolute hidden lg:block  z-0">
                <div className="font-bold text-[198px] tracking-[-0.07em] leading-[110%] text-gray-200">
                  <motion.div
                    initial={{ x: -80, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ ease: "easeOut", duration: 0.5, delay: 0 }}
                  >
                    NEW
                  </motion.div>
                  <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ ease: "easeOut", duration: 0.6, delay: 0.4 }}
                  >
                    MERCEDES
                  </motion.div>
                </div>
              </div>
              {/* Hero Image */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: "easeOut", duration: 0.8, delay: 1 }}
              >
                <Image
                  src={Mercy}
                  className="max-w-[963px] z-10 left-1/2 -translate-x-1/2 relative w-full"
                />
              </motion.div>
            </div>
            {/* Details Hero Car */}
            <div className="mt-10 flex flex-col md:flex-row items-center gap-6 md:gap-10 lg:gap-16">
              <div className="flex items-center justify-center gap-4 md:gap-6 lg:gap-14">
                <div className="flex flex-col gap-4 md:gap-6 lg:gap-14">
                  <motion.div
                    initial={{ x: 80, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ ease: "easeOut", duration: 0.8, delay: 1.5 }}
                    className="text-center"
                  >
                    <h5 className="text-sm md:text-2xl font-bold">400</h5>
                    <p className="text-xs md:text-base text-gray-500">
                      Horse Power
                    </p>
                  </motion.div>
                </div>
                <motion.span
                  initial={{ x: 80, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ ease: "easeOut", duration: 0.8, delay: 2 }}
                  className="w-[1px] h-[2.5em] md:h-[4em] bg-gray-300"
                ></motion.span>
                <div className="flex flex-col gap-4 md:gap-6 lg:gap-14">
                  <motion.div
                    initial={{ x: 80, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ ease: "easeOut", duration: 0.8, delay: 2.5 }}
                    className="text-center"
                  >
                    <h5 className="text-sm md:text-2xl font-bold">AWD</h5>
                    <p className="text-xs md:text-base text-gray-500">Drive</p>
                  </motion.div>
                </div>
                <motion.span
                  initial={{ x: 80, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ ease: "easeOut", duration: 0.8, delay: 3 }}
                  className="w-[1px] h-[2.5em] md:h-[4em] bg-gray-300"
                ></motion.span>
                <div className="flex flex-col gap-4 md:gap-6 lg:gap-14">
                  <motion.div
                    initial={{ x: 80, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ ease: "easeOut", duration: 0.8, delay: 3.5 }}
                    className="text-center"
                  >
                    <h5 className="text-sm md:text-2xl font-bold">12S</h5>
                    <p className="text-xs md:text-base text-gray-500">
                      Speed AT
                    </p>
                  </motion.div>
                </div>
                <motion.span
                  initial={{ x: 80, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ ease: "easeOut", duration: 0.8, delay: 4 }}
                  className="w-[1px] h-[2.5em] md:h-[4em] bg-gray-300"
                ></motion.span>
                <div className="flex flex-col gap-4 md:gap-6 lg:gap-14">
                  <motion.div
                    initial={{ x: 80, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ ease: "easeOut", duration: 0.8, delay: 4.5 }}
                    className="text-center"
                  >
                    <h5 className="text-sm md:text-2xl font-bold">A.I</h5>
                    <p className="text-xs md:text-base text-gray-500">
                      Tracking
                    </p>
                  </motion.div>
                </div>
              </div>
              <motion.div
                initial={{ x: 80, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ ease: "easeOut", duration: 0.8, delay: 5 }}
              >
                <button className="bg-blue-500 rounded-full font-semibold text-white ml-2 px-10 py-3 md:px-14 md:py-4 text-xs md:text-base">
                  Rent Now
                </button>
              </motion.div>
            </div>
          </div>
        </section>
      </div>

      {/* Popular Cars */}
      <section className="py-10 lg:py-[100px] px-6 md:px-10 lg:px-28 bg-darkGrey">
        {/* Title */}
        <div className="sm:space-y-1 md:space-y-2">
          <h2 className="text-2xl md:text-[26px] font-bold">Popular Cars</h2>
          <p className="text-sm md:text-base text-gray-400">
            Start your big day
          </p>
        </div>
        <div className="grid grid-rows-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {popularCars.map((v, i) => (
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

      {/* Benefit */}
      <section className="py-[100px] mx-6 lg:mx-0">
        <div className="flex flex-col md:flex-row md:items-center justify-center gap-10 md:gap-4 lg:gap-32">
          {/* Left Content */}
          <div className="md:w-[60%] lg:w-1/3">
            <Image src={Illustration} />
          </div>
          {/* Right Content */}
          <div className="md:w-[40%] lg:w-[20%]">
            <h2 className="text-2xl font-bold">Extra Benefits</h2>
            <p className="mt-2 text-gray-500">You drive safety and famous</p>
            <div className="my-10 space-y-8 md:space-y-4 lg:space-y-8">
              <IconCard
                image={IconCar}
                title="Delivery"
                subtitle="Just sit tight and wait"
              />
              <IconCard
                image={IconPrice}
                title="Pricing"
                subtitle="12x Pay Installment"
              />
              <IconCard
                image={IconSecurity}
                title="Secure"
                subtitle="Use your plate number"
              />
              <IconCard
                image={IconTrade}
                title="Fast Trade"
                subtitle="Change car faster"
              />
            </div>
            <Link href={"/catalog"}>
              <button className="mt-5 bg-blue-500 shadow-indigo-400 shadow-lg rounded-full text-white font-bold w-full py-4">
                Explore Cars
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="md:text-center my-8 lg:my-[100px] mx-6">
        <h1 className="text-xl md:text-[26px] font-bold">
          Frequently Asked Questions
        </h1>
        <p className="mt-2 text-sm md:text-base text-gray-400">
          Learn more about Luxury and get a success
        </p>
        <div className="mt-14 grid grid-rows-1 md:grid-cols-2 lg:mx-80 gap-x-8 gap-y-4 ">
          <FaqCard />
          <FaqCard />
          <FaqCard />
          <FaqCard />
          <FaqCard />
          <FaqCard />
        </div>
      </section>

      {/* Footer */}
      <section className="mt-[50px] lg:my-[100px] flex justify-between items-center text-center md:text-start md:pl-6 lg:pl-28 py-10 lg:py-6 bg-blue-950 ">
        <div className="md:w-[40%] lg:w-[27%] z-0 ">
          <h2 className="text-white text-2xl font-bold">
            Drive Yours Today.
            <br />
            Drive Faster.
          </h2>
          <p className="text-white/50 mt-6">
            Get an instant booking to catch up whatever your really want to
            achieve today, yes.
          </p>
          <button className="text-white font-bold bg-indigo-700 shadow-lg shadow-indigo-800 rounded-full mt-10 px-14 py-4">
            Book Now
          </button>
        </div>
        <div className="hidden md:block w-[56%] relative z-10 md:-bottom-24 lg:-bottom-28 ">
          <Image src={MercyCrop} className="" />
        </div>
      </section>

      <div className="my-10 lg:my-20 text-center">
        <h6 className="text-gray-400 text-sm md:text-base">
          All Rights Reserved. Copyright Luxury 2023.
        </h6>
      </div>
    </>
  );
}
