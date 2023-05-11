"use client";
import Header from "@/components/header/page";
import Image from "next/image";
import Mercy from "public/mercy.png";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="container relative pb-[90px] pt-[50px]">
      <div className=" flex flex-col items-center justify-center">
        <div className="relative ">
          <div className="absolute  z-0">
            <div className="font-bold text-[200px] tracking-[-0.07em] leading-[110%] text-gray-200">
              <motion.div
                initial={{ x: -80, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ ease: "easeOut", duration: 0.6, delay: 0 }}
              >
                NEW
              </motion.div>
              <motion.div
                initial={{ x: 80, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ ease: "easeOut", duration: 0.6, delay: 0.5 }}
              >
                MERCEDES
              </motion.div>
            </div>
          </div>
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
        </div>
      </div>
    </section>
  );
}
