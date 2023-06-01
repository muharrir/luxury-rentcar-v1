import React from "react";
import EffectCircle from "./EffectCircle";

export default function LeftSide() {
	return (
		<div class="hidden relative overflow-hidden bg-gradient-to-br from-gray-200 via-gray-400 to-gray-600 lg:flex lg:w-1/2 lg:justify-around lg:items-center">
			<div>
				<h1 class="text-black font-bold text-4xl font-sans">LUXURY RENT CAR</h1>
				<p class="text-black mt-1">The best solution for easy car rental with us</p>
			</div>
			<EffectCircle />
		</div>
	);
}
