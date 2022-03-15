import React from "react";

export default function Input({ label, ...otherProps }) {
	return (
		<div className="input-container py-2 flex flex-col items-start gap-2 w-full">
			<label className="text-black text-md ">{label}</label>
			<input
				className="bg-transparent p-2 rounded focus:outline-none w-full"
				{...otherProps}
			/>
		</div>
	);
}
