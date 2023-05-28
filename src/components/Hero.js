"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Mercy from "../../public/assets/images/mercy.png";

function Hero() {
  return (
    <div className="container relative pt-5 pb-20 md:pt-5 md:pb-[90px]">
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
              alt="Mercy"
            />
          </motion.div>
        </div>
        {/* Details Hero Car */}
        <div className="mt-10 flex flex-col md:flex-row items-center gap-6 md:gap-10 lg:gap-16">
          <div className="flex items-center justify-center gap-4 md:gap-6 lg:gap-14">
            <div className="flex flex-col gap-4 md:gap-6 lg:gap-14">
              <motion.div
                initial={{ x: 50, opacity: 0 }}
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
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ ease: "easeOut", duration: 0.8, delay: 2 }}
              className="w-[1px] h-[2.5em] md:h-[4em] bg-gray-300"
            ></motion.span>
            <div className="flex flex-col gap-4 md:gap-6 lg:gap-14">
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ ease: "easeOut", duration: 0.8, delay: 2.5 }}
                className="text-center"
              >
                <h5 className="text-sm md:text-2xl font-bold">AWD</h5>
                <p className="text-xs md:text-base text-gray-500">Drive</p>
              </motion.div>
            </div>
            <motion.span
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ ease: "easeOut", duration: 0.8, delay: 3 }}
              className="w-[1px] h-[2.5em] md:h-[4em] bg-gray-300"
            ></motion.span>
            <div className="flex flex-col gap-4 md:gap-6 lg:gap-14">
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ ease: "easeOut", duration: 0.8, delay: 3.5 }}
                className="text-center"
              >
                <h5 className="text-sm md:text-2xl font-bold">12S</h5>
                <p className="text-xs md:text-base text-gray-500">Speed AT</p>
              </motion.div>
            </div>
            <motion.span
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ ease: "easeOut", duration: 0.8, delay: 4 }}
              className="w-[1px] h-[2.5em] md:h-[4em] bg-gray-300"
            ></motion.span>
            <div className="flex flex-col gap-4 md:gap-6 lg:gap-14">
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ ease: "easeOut", duration: 0.8, delay: 4.5 }}
                className="text-center"
              >
                <h5 className="text-sm md:text-2xl font-bold">A.I</h5>
                <p className="text-xs md:text-base text-gray-500">Tracking</p>
              </motion.div>
            </div>
          </div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.8, delay: 5 }}
          >
            <div className="bg-blue-500  rounded-full font-semibold text-white ml-2 px-10 py-3 cursor-pointer shadow-xl shadow-blue-500/50 md:px-14 md:py-4 text-xs md:text-base hover:scale-105">
              <button>Rent Now</button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
