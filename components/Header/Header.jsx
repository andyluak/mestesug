import Link from "next/link";
import React from "react";
import ALink from "../ALink/aLink";

export default function Header() {
	return (
		<>
			<div className="header-container bg-primary flex flex-col text-secondary">
				<div className="header-primary-menu w-full flex flex-row justify-between  p-4">
					<div className="header-logo flex content-center justify-center text-center items-center px-desktop">
						<ALink href="/" className="font-mono" text="Mestesug" />
					</div>
					<ul className="flex flex-row gap-8 px-desktop">
						<li className="hover:font-bold">
							<ALink href="/autentificare" text="Intra in cont" />
						</li>
						<li>
							<img
								width="24"
								height="24"
								src="/images/heart.svg"
								alt="heart"
							/>
						</li>
						<li>
							<img
								width="24"
								height="24"
								src="/images/cart.svg"
								alt="cart"
							/>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
}