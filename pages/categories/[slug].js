import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

export default function CategorySlug() {
	return (
		<>
			<Head>
				<title>Categorie</title>
				<meta
					name="description"
					content="Mestesug este un site de comercializare produse handmade"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div>[slug]</div>
		</>
	);
}
