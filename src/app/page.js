"use client";
import Header from "@/components/header/page";
import Image from "next/image";
import Mercy from "public/mercy.png";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="container relative pb-[90px] pt-[10px]">
      <div className=" flex flex-col items-center justify-center">
        <div className="relative ">
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
              className=" max-w-[963px] z-10 left-1/2 -translate-x-1/2 relative w-full"
            />
          </motion.div>
          <div className="mt-10 flex  items-center justify-center gap-14">
            <div className="flex gap-14">
              <motion.div
                initial={{ x: 80, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ ease: "easeOut", duration: 0.8, delay: 1.5 }}
                className="text-center"
              >
                <h5 className="text-2xl font-bold">380</h5>
                <p className="text-gray-500 ">Horse Power</p>
              </motion.div>
              <motion.span
                initial={{ x: 80, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ ease: "easeOut", duration: 0.8, delay: 2 }}
                className="w-[1px] min-h-[1em] bg-gray-300"
              ></motion.span>
            </div>
            <div className="flex gap-14">
              <motion.div
                initial={{ x: 80, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ ease: "easeOut", duration: 0.8, delay: 2.5 }}
                className="text-center"
              >
                <h5 className="text-2xl font-bold">12S</h5>
                <p className="text-gray-500 ">Speed AT</p>
              </motion.div>
              <motion.span
                initial={{ x: 80, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ ease: "easeOut", duration: 0.8, delay: 3 }}
                className="w-[1px] min-h-[1em] bg-gray-300"
              ></motion.span>
            </div>
            <div className="flex gap-14">
              <motion.div
                initial={{ x: 80, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ ease: "easeOut", duration: 0.8, delay: 3.5 }}
                className="text-center"
              >
                <h5 className="text-2xl font-bold">AWD</h5>
                <p className="text-gray-500 ">Drive</p>
              </motion.div>
              <motion.span
                initial={{ x: 80, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ ease: "easeOut", duration: 0.8, delay: 4 }}
                className="w-[1px] min-h-[1em] bg-gray-300"
              ></motion.span>
            </div>
            <div className="flex gap-14">
              <motion.div
                initial={{ x: 80, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ ease: "easeOut", duration: 0.8, delay: 4.5 }}
                className="text-center"
              >
                <h5 className="text-2xl font-bold">A.I</h5>
                <p className="text-gray-500 ">Tracking</p>
              </motion.div>
            </div>
            <motion.div
              initial={{ x: 80, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ ease: "easeOut", duration: 0.8, delay: 5 }}
            >
              <button className="bg-blue-500 rounded-full  font-semibold text-white ml-10 px-12 py-4">
                Rent Now
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
