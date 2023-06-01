import TableTransaction from "@/components/organisms/TableTransaction";
import React from "react";

export default function Transaction() {
	return (
		<div className="my-10 ml-[90px] mr-5 lg:ml-[20%] lg:mr-[18%]">
			<div>
				<h1 className="text-2xl lg:text-4xl font-semibold">Transaction Data</h1>
			</div>

			{/* DATA TRANSACTION */}
			<div className="border-2 border-dashed border-black p-7 lg:p-10 rounded-lg mt-10">
				<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
					<TableTransaction />
				</div>
			</div>
		</div>
	);
}
