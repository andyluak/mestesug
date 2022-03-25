import React from "react";

export default function Footer() {
	return (
		<div className="flex flex-col footer-container bg-primary text-secondary sm:px-40">
			<div className="flex flex-row justify-center w-full py-4 pt-8 text-2xl footer-primary-menu sm:pt-12">
				<p>Mestesug</p>
			</div>
			<div className="flex flex-row items-baseline justify-between py-4 text-center footer-secondary">
				<ul>
					<h2 className="pb-2 text-lg">Cumpara</h2>
					<li className="pb-2 text-sm">Carduri Cadou</li>
					<li className="pb-2 text-sm">Blog</li>
				</ul>

				<ul>
					<h2 className="pb-2 text-lg">Vinde</h2>
					<li className="pb-2 text-sm">Vinde pe Mestesug</li>
					<li className="pb-2 text-sm">Devino afiliat</li>
				</ul>

				<ul>
					<h2 className="pb-2 text-lg">Despre noi</h2>
					<li className="pb-2 text-sm">Misiunea Noastra</li>
				</ul>
			</div>
		</div>
	);
}
