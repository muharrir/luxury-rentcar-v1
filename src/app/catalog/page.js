import Image from "next/image";
import React from "react";
import carsLogo from "public/data/carsLogo.json";

function Catalog() {
	return (
		<div class="flex flex-wrap h-32 gap-16 justify-center items-center">
			{carsLogo.map((v, i) => (
				<div key={i}>
					<Image width={500} height={500} class="h-20 w-auto" src={v.img} alt={v.name} />
				</div>
			))}
		</div>
	);
}

export default Catalog;
