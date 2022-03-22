import React, { useState } from "react";
import { useSelector } from "react-redux";

import ALink from "@/components/ALink/aLink";
import Modal from "@/components/Modal/Modal";
import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";

export default function ContulMeu() {
	const user = useSelector((state) => state.user.currentUser);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const onNameChange = (e) => {};

	return (
		<div className="px-desktop flex flex-col gap-8 pt-4">
			<h1 className="title text-xl">Salut, Alex</h1>
			<div className="container flex flex-row">
				<div className="sidebar flex flex-col w-1/3 gap-4 text-sm">
					<ALink href="/contul-meu" text="Profile Settings" />
					<ALink href="/contul-meu" text="Account Settings" />
					<ALink href="/contul-meu" text="Purchases & reviews" />
					<ALink href="/contul-meu" text="Adresses" />
					<ALink href="/contul-meu" text="Payments" />
				</div>

				<div className="tab flex flex-col w-2/3">
					<p className="text-lg pb-4">Profile Settings</p>
					<div className="flex flex-row gap-4 items-baseline">
						<span className="text-lg">Name:</span>
						<span className="text-lg">{`${user.first_name} ${user.last_name}`}</span>
						<button
							onClick={() => setIsModalOpen(true)}
							className="text-xs"
						>
							Edit / Change
						</button>
						<Modal
							show={isModalOpen}
							setIsModalOpen={setIsModalOpen}
						>
							<Input
								type="text"
								name="first_name"
								label="First Name"
								placeholder={user.first_name}
								onChange={onNameChange}
							/>
							<Input
								type="text"
								name="last_name"
								label="Last Name"
								placeholder={user.last_name}
								onChange={onNameChange}
							/>
							<div className="button-group flex flex-row gap-4 py-4">
								<Button text="Save" buttonStyle={"primary"} />
								<Button text="Remove" buttonStyle="secondary" />
							</div>
						</Modal>
					</div>
				</div>
			</div>
		</div>
	);
}
