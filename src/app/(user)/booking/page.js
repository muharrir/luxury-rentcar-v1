import React from "react";
import imageMobil from "public/audi.png";
import Image from "next/image";
import Button from "@/components/Button";
import Link from "next/link";

export default function Booking() {
  return (
    <section class="md:h-[calc(100vh-7.25rem)] lg:h-[calc(100vh-3rem)] w-full bg-slate-100 md:flex lg:py-10 2xl:py-0">
      <div class="md:w-1/2 pb-10 md:flex md:items-center md:justify-center">
        <div>
          <Image
            class="w-full max-w-sm md:max-w-md 2xl:max-w-3xl mx-auto"
            src={imageMobil}
            alt="cars"
          />
          <div class="mt-5 text-center text-xl 2xl:text-2xl font-bold">
            <h1>All New Mazda MX-5</h1>
            <h2 class="mt-5">Mazda</h2>
            <h2 class="mt-5 text-lg 2xl:text-xl">Rp. 780.000 /day</h2>
          </div>
        </div>
      </div>

      <hr class="mt-2 mx-8 border-t-2 md:hidden" />

      <div class="md:flex md:justify-center md:items-center py-8 bg-slate-100 md:w-1/2">
        <div class="md:max-w-md lg:bg-white rounded-2xl 2xl:p-10 2xl:max-w-lg">
          <div class="w-full p-5 text-center">
            <h1 class="text-gray-800 font-bold text-2xl mb-1">
              Form Booking Cars
            </h1>
            <p class="text-sm lg:text-base font-normal text-gray-600 mt-3 mb-7 lg:mb-2">
              Fill out the form completely in order to make a payment
            </p>
          </div>

          {/* Form Booking */}
          <div class="w-full px-5 text-xs lg:text-sm 2xl:text-base">
            <div class="mb-5">
              <label class="font-semibold px-1">Full Name</label>
              <input
                type="text"
                class="mt-1 w-full pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-slate-500"
              />
            </div>

            <div class="mb-5">
              <label class="font-semibold px-1">NIK / Passport Number</label>
              <input
                type="number"
                class="mt-1 w-full pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-slate-500"
              />
            </div>

            <div class="mb-5">
              <label class="font-semibold px-1">Proof of KTP / Passport</label>
              <input
                type="file"
                class="mt-1 w-full pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-slate-500"
              />
            </div>

            <div class="block md:flex md:justify-between mb-5">
              <div class="md:mr-1">
                <label class="font-semibold px-1">From</label>
                <input
                  type="date"
                  class="mt-1 w-full pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-slate-500"
                />
              </div>
              <div class="md:ml-1">
                <label class="font-semibold px-1">Until</label>
                <input
                  type="date"
                  class="mt-1 w-full pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-slate-500"
                />
              </div>
            </div>

            <div class="mb-5">
              <Link href={"/booking/checkout"}>
                <Button name="Continue" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
