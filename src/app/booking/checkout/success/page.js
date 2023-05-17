import Button from "@/components/Button";
import Link from "next/link";
import React from "react";

export default function Success() {
	return (
		<>
			<section class="w-full my-auto py-10 md:py-24 2xl:py-36 h-[calc(100vh-7.3rem)]">
				<div class="mx-auto md:max-w-md lg:bg-white md:rounded-3xl 2xl:p-10 2xl:max-w-lg md:shadow-xl md:border md:border-gray-300">
					<div class="w-full p-10 text-center">
						<h1 class="text-gray-800 font-bold text-2xl mb-1">Success Booking!</h1>
						<p class="text-sm lg:text-base font-normal text-gray-600 mt-3 mb-7">We will email you the confirmation and the next instructions</p>
						<div class="px-5">
							<Link href={"/myprofile"}>
								<Button name="My Profile" />
							</Link>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
