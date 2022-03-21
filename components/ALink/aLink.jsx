import Link from "next/link";
import React from "react";
import styles from "styles/Link.hover.module.css";

export default function ALink({ href, text, ...otherProps }) {
	return (
		<Link href={href}>
			<a className={styles.link} {...otherProps}>
				{text}
			</a>
		</Link>
	);
}
