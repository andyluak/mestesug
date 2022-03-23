import styles from "styles/Input.module.scss";
import React from "react";

export default function Input({ label, ...otherProps }) {
	// destructure classNames from otherProps
	let { className, ...rest } = otherProps;

	if (className != undefined) {
		className = `${styles.input} ${className} w-full p-2 bg-white rounded shadow-md focus:outline-none`;
	} else {
		className = `${styles.input} w-full p-2 bg-white rounded shadow-md focus:outline-none`;
	}

	return (
		<div className="flex flex-col items-start w-full gap-2 py-2 input-container">
			<label className="text-gray-600 text-md ">{label}</label>
			<input {...otherProps} className={`${className}`} />
		</div>
	);
}
