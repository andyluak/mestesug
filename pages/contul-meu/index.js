import React from "react";

export default function ContulMeu() {
	return (
		<div className="px-desktop flex flex-col gap-8 pt-4">
			<h1 className="title text-xl">Salut, Alex</h1>
			<div className="container flex flex-row">
				<div className="sidebar flex flex-col w-1/3 gap-4 text-sm">
					<p>Profile Settings</p>
					<p>Account Settings</p>
					<p>Purchases & reviews</p>
					<p>Adresses</p>
					<p>Payments</p>
				</div>

				<div className="tab flex flex-col w-2/3">
					<p className="text-lg">Profile Settings</p>
				</div>
			</div>
		</div>
	);
}
