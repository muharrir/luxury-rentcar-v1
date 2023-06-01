import React from "react";

export default function ReviewOrder({ title, value }) {
	return (
		<>
			<div className="flex justify-between mb-1">
				<p>{title}</p>
				<p>{value}</p>
			</div>
		</>
	);
}
