"use client";
import React from "react";
import Lottie from "lottie-react";
import rubik from "../../public/assets/lottie/rubik.json";

export default function Loading() {
  return (
    <div className={`fixed z-10 inset-0 overflow-y-auto `}>
      <div className="bg-black/80  flex items-center justify-center  min-h-screen">
        <Lottie animationData={rubik} loop={true} className="w-80 h-80 " />
      </div>
    </div>
  );
}
