import React from "react";

export default function Button({ text, buttonStyle, ...otherProps }) {
	let styles = {
		primary:
			"bg-primary text-secondary text-sm py-4 px-12 rounded hover:bg-white hover:text-primary transition-all duration-300 ease-in-out",
		secondary:
			"bg-white text-primary text-sm border border-primary border-2 py-4 px-12 rounded hover:bg-primary hover:text-secondary transition-all duration-300 ease-in-out",
	};
	return (
		<button className={`${styles[buttonStyle]}`} {...otherProps}>
			{text}
		</button>
	);
}
