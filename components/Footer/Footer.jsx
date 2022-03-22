import React from "react";

export default function Footer() {
	return (
		<div className="footer-container bg-primary flex flex-col text-secondary sm:px-desktop">
			<div className="footer-primary-menu w-full flex flex-row justify-center py-4 pt-8 sm:pt-12 text-2xl">
				<p>Mestesug</p>
			</div>
			<div className="footer-secondary py-4 px-desktop flex flex-row items-baseline text-center justify-between">
				<ul>
					<h2 className="text-lg pb-2">Cumpara</h2>
					<li className="text-sm pb-2">Carduri Cadou</li>
					<li className="text-sm pb-2">Blog</li>
				</ul>

				<ul>
					<h2 className="text-lg pb-2">Vinde</h2>
					<li className="text-sm pb-2">Vinde pe Mestesug</li>
					<li className="text-sm pb-2">Devino afiliat</li>
				</ul>

				<ul>
					<h2 className="text-lg pb-2">Despre noi</h2>
					<li className="text-sm pb-2">Misiunea Noastra</li>
				</ul>
			</div>
		</div>
	);
}
