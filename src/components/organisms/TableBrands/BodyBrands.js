import React from "react";

export default function BodyBrands({ id, name }) {
	return (
		<tbody>
			<tr class="bg-white border-b hover:bg-gray-50">
				<th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
					{id}
				</th>
				<td class="px-6 py-4">{name}</td>
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
