import React from "react";

export default function Button({ name }) {
	return (
		<>
			<button type="submit" class="block w-full bg-slate-700 hover:bg-slate-600 transition-all mt-4 py-2 rounded-2xl text-white font-semibold mb-2">
				{name}
			</button>
		</>
	);
}
