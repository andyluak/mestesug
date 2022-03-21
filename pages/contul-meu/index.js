import ALink from "@/components/ALink/aLink";
import React from "react";

export default function ContulMeu() {
	return (
		<div className="px-desktop flex flex-col gap-8 pt-4">
			<h1 className="title text-xl">Salut, Alex</h1>
			<div className="container flex flex-row">
				<div className="sidebar flex flex-col w-1/3 gap-4 text-sm">
					<ALink href="/contul-meu" text="Profile Settings" />
					<ALink href="/" text="Account Settings" />
					<ALink href="" text="Purchases & reviews" />
					<ALink href="" text="Adresses" />
					<ALink href="" text="Payments" />
				</div>

				<div className="tab flex flex-col w-2/3">
					<p className="text-lg">Profile Settings</p>
				</div>
			</div>
		</div>
	);
}
