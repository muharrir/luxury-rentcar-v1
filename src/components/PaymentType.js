import Image from "next/image";
import React from "react";

export default function PaymentType({ payment, image, name }) {
	return (
		<>
			<div class="relative boxPayment">
				<input type="radio" value={name} name="paymentMethod" id={name} class="absolute inset-0 z-50 opacity-0 cursor-pointer" />
				<label for={name} class="flex items-center justify-center gap-2 border border-grey rounded-3xl p-5 min-h-[80px] bg-white">
					<Image src={image} alt="" />
					<p class="text-sm lg:text-base font-semibold">{payment}</p>
				</label>
			</div>
		</>
	);
}
