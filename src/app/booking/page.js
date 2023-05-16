import React from "react";
import imageMobil from "public/audi.png";
import Image from "next/image";
import Button from "@/components/Button";

export default function Booking() {
	return (
		<>
			<section class="w-full md:flex md:items-center bg-slate-100">
				<div class="md:h-screen md:flex md:w-1/2 pb-10 justify-center items-center">
					<div>
						<Image class="w-full max-w-sm md:max-w-md 2xl:max-w-2xl mx-auto" src={imageMobil} alt="cars" />
						<div class="mt-5 text-center text-xl font-bold">
							<h1>All New Mazda MX-5</h1>
							<h2 class="mt-5">Mazda</h2>
							<h2 class="mt-5 text-lg">Rp. 780.000 /day</h2>
						</div>
					</div>
				</div>

				<hr class="mt-2 mx-8 border-t-2 md:hidden" />

				<div class="md:h-screen flex md:w-1/2 justify-center py-10 items-center bg-slate-100">
					<div class="rounded-2xl 2xl:bg-white 2xl:p-10">
						<div class="w-full p-5 text-center">
							<h1 class="text-gray-800 font-bold text-2xl mb-1">Form Booking Cars</h1>
							<p class="text-sm lg:text-base font-normal text-gray-600 mt-3 mb-7">Fill out the form completely in order to make a payment</p>
						</div>

						{/* Form Booking */}
						<div class="w-full px-5 text-xs lg:text-base">
							<div class="mb-5">
								<label class="font-semibold px-1">Full Name</label>
								<input type="text" class="mt-1 w-full pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-slate-500" />
							</div>

							<div class="mb-5">
								<label class="font-semibold px-1">NIK / Passport Number</label>
								<input type="number" class="mt-1 w-full pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-slate-500" />
							</div>

							<div class="mb-5">
								<label class="font-semibold px-1">Proof of KTP / Passport</label>
								<input type="file" class="mt-1 w-full pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-slate-500" />
							</div>

							<div class="block md:flex md:justify-between mb-5">
								<div class="mb-5 md:mr-1">
									<label class="font-semibold px-1">From</label>
									<input type="date" class="mt-1 w-full pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-slate-500" />
								</div>
								<div class="mb-5 md:ml-1">
									<label class="font-semibold px-1">Until</label>
									<input type="date" class="mt-1 w-full pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-slate-500" />
								</div>
							</div>

							<div class="mb-5">
								<Button name="Booking" />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
