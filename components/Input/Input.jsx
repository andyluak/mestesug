import React from 'react';

export default function Input({ label, ...otherProps }) {
	return (
		<div className="flex flex-col items-start w-full gap-2 py-2 input-container">
			<label className="text-gray-600 text-md ">{label}</label>
			<input
				className="w-full p-2 bg-white rounded shadow-md focus:outline-none"
				{...otherProps}
			/>
		</div>
	);
}
