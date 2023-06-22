"use client";
import Image from "next/image";
import React, { useState } from "react";
import IconCars from "./iconCars";
import { motion } from "framer-motion";
import Link from "next/link";

function SidebarAdmin() {
  const [isClick, setIsClick] = useState(true);

  //   state for sub MENU
  const [isOpen, setIsOpen] = useState(true);
  const handleClickItem = () => {
    setIsOpen(!isOpen);
  };

  const sidebarAnimation = {
    open: {
      width: "16rem",
      transition: {
        damping: 40,
      },
    },
    close: {
      width: "4rem",
      transition: {
        damping: 40,
      },
    },
  };

	return (
		<motion.div variants={sidebarAnimation} animate={isClick ? "open" : "close"} className="pt-5 w-[16rem] max-w-[16rem] h-full bg-[#222831] shadow-[5px_0_20px_0_rgba(0,0,0,0.4)] px-2 overflow-hidden z-50 fixed">
			{/* CARD ITEM */}
			<div>
				{/* LOGO */}
				<Link href={"/admin"} className="flex items-center gap-2.5 border-b border-slate-400 pb-5">
					<Image src={"/assets/svgs/ic-logo.svg"} width={60} height={60} alt="ic-logo" />
					<span className="uppercase text-[#EEEEEE] font-bruno text-center text-2xl">luxury</span>
				</Link>
				{/* ITEM LIST */}
				<div className="transition-all duration-500">
					{/* BLUE MENU */}
					<div className="mt-10 flex items-center justify-between bg-[#0092CA] rounded-md py-2 px-[9px] cursor-pointer select-none" onClick={handleClickItem}>
						{/* MENU ITEM */}
						<div className="flex gap-4 items-center">
							<IconCars />
							<h3 className="text-white text-lg ">Cars</h3>
						</div>
						<div children="transition-all duration-500">
							{isOpen ? <Image src={"/assets/svgs/ic-chevron.svg"} width={24} height={24} alt="ic_left" className="transition-all duration-500" /> : <Image src={"/assets/svgs/ic-chevron.svg"} width={24} height={24} alt="ic_left" className="transition-all duration-500 -rotate-90" />}
						</div>
					</div>

					{/* SUB ITEM */}
					{isClick && (
						<div className={`mt-4 ${isOpen ? "hidden" : "px-6 text-white "}`}>
							<Link href={"/admin/data-cars"}>
								<h3 className="cursor-pointer mb-5">Input Cars Data</h3>
							</Link>
							<Link href={"/admin/cars-data"}>
								<h3 className="cursor-pointer mb-5">Data Cars</h3>
							</Link>
							<Link href={"/admin/brands-data"}>
								<h3 className="cursor-pointer mb-5">Data Brands</h3>
							</Link>
							<Link href={"/admin/transaction"}>
								<h3 className="cursor-pointer mb-5">Data Transaction</h3>
							</Link>
						</div>
					)}
				</div>
			</div>

        {/* Controller */}
        <motion.div
          className="absolute bottom-5 right-2 cursor-pointer"
          onClick={() => setIsClick(!isClick)}
          animate={
            isClick
              ? {
                  x: 0,
                  y: 0,
                  rotate: 0,
                }
              : {
                  x: -10,
                  y: 0,
                  rotate: 180,
                }
          }
        >
          <Image
            src={"/assets/svgs/ic-chevron.svg"}
            width={24}
            height={24}
            alt="ic_left"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default SidebarAdmin;
