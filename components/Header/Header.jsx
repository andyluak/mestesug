import Link from "next/link";
import React from "react";
import ALink from "../ALink/aLink";

export default function Header({ isLoggedIn }) {
	return (
		<>
			<div className="flex flex-col px-4 sm:px-40 header-container bg-primary text-secondary">
				<div className="flex flex-row justify-between w-full py-4 header-primary-menu">
					<div className="flex header-logo">
						<ALink href="/" className="font-mono" text="Mestesug" />
					</div>
					<ul className="flex flex-row gap-8">
						{isLoggedIn ? (
							<li className="hover:font-bold">
								<Link href="/contul-meu">
									<a>
										<img
											src="/images/profile.svg"
											alt="profile"
											width="24"
											height="24"
										/>
									</a>
								</Link>
							</li>
						) : (
							<li className="hover:font-bold">
								<ALink
									href="/autentificare"
									text="Intra in cont"
								/>
							</li>
						)}

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
