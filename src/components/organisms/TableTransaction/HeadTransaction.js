import React from "react";

export default function HeadTransaction() {
	return (
		<thead class="text-xs text-gray-700 uppercase bg-gray-50">
			<tr>
				<th scope="col" class="px-6 py-3">
					No
				</th>
				<th scope="col" class="px-6 py-3">
					Name
				</th>
				<th scope="col" class="px-6 py-3">
					Total Price
				</th>
				<th scope="col" class="px-6 py-3">
					Rental Date
				</th>
				<th scope="col" class="px-6 py-3">
					Payment Confirmation
				</th>
				<th scope="col" class="px-6 py-3">
					Status
				</th>
				<th scope="col" class="px-6 py-3">
					Action
				</th>
			</tr>
		</thead>
	);
}
