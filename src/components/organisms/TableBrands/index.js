import React from "react";
import HeadBrands from "./HeadBrands";
import BodyBrands from "./BodyBrands";
import dataBrands from "../../../data/dataBrand.json";

export default function TableBrands() {
	return (
		<table className="w-full text-sm text-left text-gray-500">
			{/* Table Head */}
			<HeadBrands />
			{/* Table Body  */}
			{dataBrands.brands.map((v, i) => (
				<BodyBrands id={v.id} name={v.name} key={v.id} />
			))}
		</table>
	);
}
