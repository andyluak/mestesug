import React from "react";
import { useRouter } from "next/router";

export default function SuccesAutentificare() {
	const router = useRouter();
	// Get query params
	const { success } = router.query;

	const message = success
		? "Contul a fost creat cu succes !"
		: "Eroare la creearea contului";
	return (
		<div>
			{" "}
			<p>{message}</p>{" "}
		</div>
	);
}
