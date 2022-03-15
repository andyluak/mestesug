import Link from "next/link";
import React from "react";

export default function ALink({ href, text, ...otherProps }) {
	return (
		<Link href={href}>
			<a {...otherProps}> {text} </a>
		</Link>
	);
}
