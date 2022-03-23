import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCurrentUser } from "redux/user/user.actions";

import ALink from "@/components/ALink/aLink";
import Modal from "@/components/Modal/Modal";
import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";

export default function ContulMeu() {
	const user = useSelector((state) => state.user.currentUser);
	const dispatch = useDispatch();
	const [isModalOpen, setIsModalOpen] = useState(undefined);
	const formRef = useRef(null);
	const onNameChange = (e) => {
		console.log(e);
	};

	const onNameSubmit = (e) => {
		const action = e.target.dataset.action;

		const formData = new FormData(formRef.current);
		//Get first_name and last_name
		const first_name = formData.get("first_name");
		const last_name = formData.get("last_name");

		// Get the cookie bearer
		const bearer = document.cookie.split("=")[1];

		switch (action) {
			case "save":
				fetch(`/api/users/${user.id}`, {
					method: "PATCH",
					body: JSON.stringify({
						first_name,
						last_name,
					}),
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${bearer}`,
					},
				})
					.then((res) => {
						dispatch(updateCurrentUser(user.id));
						setIsModalOpen(false);
					})
					.catch((err) => {
						console.log(err);
					});
				break;
			case "remove":
				console.log(first_name, last_name);
				break;

			default:
				return;
		}
	};

	const onModalOpenClick = (e) => {
		e.preventDefault();
		// get data-modal attribute from the button
		const modalValue = e.target.dataset.modal;
		setIsModalOpen(modalValue);
	};

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

				<div className="tab flex flex-col w-2/3 gap-2">
					<p className="text-lg pb-4">Profile Settings</p>
					<div className="flex flex-row gap-4 items-baseline">
						<span className="text-lg">Name:</span>
						<span className="text-lg">{`${user.first_name} ${user.last_name}`}</span>
						<button
							onClick={onModalOpenClick}
							data-modal="name"
							className="text-xs"
						>
							Edit / Change
						</button>
						<Modal
							show={isModalOpen === "name" && true}
							setIsModalOpen={setIsModalOpen}
						>
							<form
								className="w-2/3"
								onSubmit={(e) => e.preventDefault()}
								ref={formRef}
							>
								<Input
									type="text"
									name="first_name"
									label="First Name"
									placeholder={user.first_name}
									onChange={onNameChange}
									className="w-full"
								/>
								<Input
									type="text"
									name="last_name"
									label="Last Name"
									placeholder={user.last_name}
									onChange={onNameChange}
								/>
								<div className="button-group flex flex-row gap-4 py-4">
									<Button
										text="Save"
										buttonStyle={"primary"}
										data-action="save"
										onClick={onNameSubmit}
									/>
								</div>
							</form>
						</Modal>
					</div>
					<div className="flex flex-row gap-4 items-baseline">
						<span className="text-lg">Phone number:</span>
						<span className="text-lg">{`${user.phoneNumber}`}</span>
						<button
							onClick={onModalOpenClick}
							className="text-xs"
							data-modal="phone"
						>
							Edit / Change
						</button>
						<Modal
							show={isModalOpen === "phone" && true}
							setIsModalOpen={setIsModalOpen}
						>
							<Input
								type="number"
								name="phoneNumber"
								label="Phone Number"
								placeholder={user.phoneNumber}
								onChange={() => {}}
								className="w-full"
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
