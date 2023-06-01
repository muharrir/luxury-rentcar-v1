import React from "react";

export default function BodyCars({ id, title, brand, price }) {
	return (
		<tbody>
			<tr class="bg-white border-b hover:bg-gray-50">
				<th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
					{id}
				</th>
				<td class="px-6 py-4">{brand}</td>
				<td class="px-6 py-4">{title}</td>
				<td class="px-6 py-4">{price}</td>
				<td class="px-6 py-4">
					<a href="#">
						<span class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Details</span>
					</a>
				</td>
				<td class="px-6 py-4">
					<a href="#">
						<span class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Details</span>
					</a>
				</td>
				<td class="px-6 py-4">
					<a href="#" class="font-medium text-blue-600 hover:underline mr-5">
						Edit
					</a>
					<a href="#" class="font-medium text-red-600 hover:underline">
						Delete
					</a>
				</td>
			</tr>
		</tbody>
	);
}
