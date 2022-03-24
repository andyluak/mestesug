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
	const nameFormRef = useRef(null);
	const phoneFormRef = useRef(null);
	const onNameChange = (e) => {};

	const onNameSubmit = async (e) => {
		const action = e.target.dataset.action;

		const formData = new FormData(nameFormRef.current);
		//Get first_name and last_name
		const first_name = formData.get("first_name");
		const last_name = formData.get("last_name");

		// Get the cookie bearer
		const bearer = document.cookie.split("=")[1];

		switch (action) {
			case "save":
				try {
					const response = await fetch(`/api/users/${user.id}`, {
						method: "PATCH",
						body: JSON.stringify({
							first_name,
							last_name,
						}),
						headers: {
							"Content-Type": "application/json",
							Authorization: `Bearer ${bearer}`,
						},
					});
					const updatedUserJson = await response.json();
					dispatch(updateCurrentUser(updatedUserJson));
					setIsModalOpen(false);
				} catch (error) {
					console.log(error);
				}
				break;
			case "remove":
				try {
					const response = await fetch(`/api/users/${user.id}`, {
						method: "DELETE",
						headers: {
							"Content-Type": "application/json",
							Authorization: `Bearer ${bearer}`,
						},
						body: JSON.stringify({
							first_name: "",
							last_name: "",
						}),
					});
					const updatedUserJson = await response.json();
					dispatch(updateCurrentUser(updatedUserJson));
					setIsModalOpen(false);
				} catch (error) {}
				break;

			default:
				return;
		}
	};

	const onPhoneSubmit = async (e) => {
		const action = e.target.dataset.action;

		const formData = new FormData(phoneFormRef.current);
		//Get first_name and last_name
		const phoneNumber = formData.get("phoneNumber");

		// Get the cookie bearer
		const bearer = document.cookie.split("=")[1];

		switch (action) {
			case "save":
				try {
					const response = await fetch(`/api/users/${user.id}`, {
						method: "PATCH",
						body: JSON.stringify({
							phoneNumber,
						}),
						headers: {
							"Content-Type": "application/json",
							Authorization: `Bearer ${bearer}`,
						},
					});
					const updatedUserJson = await response.json();
					dispatch(updateCurrentUser(updatedUserJson));
					setIsModalOpen(false);
				} catch (error) {
					console.log(error);
				}
				break;
			case "remove":
				try {
					const response = await fetch(`/api/users/${user.id}`, {
						method: "PATCH",
						headers: {
							"Content-Type": "application/json",
							Authorization: `Bearer ${bearer}`,
						},
						body: JSON.stringify({
							phoneNumber: "",
						}),
					});
					const updatedUserJson = await response.json();
					dispatch(updateCurrentUser(updatedUserJson));
					setIsModalOpen(false);
				} catch (error) {}
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
		<div className="flex flex-col gap-8 pt-4 px-desktop">
			<h1 className="text-xl title">Salut, Alex</h1>
			<div className="container flex flex-row">
				<div className="flex flex-col w-1/3 gap-4 text-sm sidebar">
					<ALink href="/contul-meu" text="Profile Settings" />
					<ALink href="/contul-meu" text="Account Settings" />
					<ALink href="/contul-meu" text="Purchases & reviews" />
					<ALink href="/contul-meu" text="Adresses" />
					<ALink href="/contul-meu" text="Payments" />
				</div>

				<div className="flex flex-col w-2/3 gap-2 tab">
					<p className="pb-4 text-lg">Profile Settings</p>
					<div className="flex flex-row items-baseline gap-4">
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
								ref={nameFormRef}
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
								<div className="flex flex-row gap-4 py-4 button-group">
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
					<div className="flex flex-row items-baseline gap-4">
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
							<form
								ref={phoneFormRef}
								className="w-2/3"
								onSubmit={(e) => e.preventDefault()}
							>
								<Input
									type="number"
									name="phoneNumber"
									label="Phone Number"
									placeholder={user.phoneNumber}
									onChange={() => {}}
									className="w-full"
								/>

								<div className="flex flex-row gap-4 py-4 button-group">
									<Button
										text="Save"
										buttonStyle={"primary"}
										data-action="save"
										onClick={onPhoneSubmit}
									/>
									<Button
										text="Remove"
										buttonStyle="secondary"
										data-action="remove"
										onClick={onPhoneSubmit}
									/>
								</div>
							</form>
						</Modal>
					</div>
				</div>
			</div>
		</div>
	);
}
