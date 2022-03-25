import React, { useRef } from "react";
import Button from "components/Button/Button";
import Input from "components/Input/Input";
import ALink from "components/ALink/aLink";

import Router from "next/router";

import { useDispatch } from "react-redux";
import { setCurrentUser } from "redux/user/user.actions";

export default function Autentificare() {
	const dispatch = useDispatch();
	const loginRef = useRef(null);
	const onChange = (e) => {};

	const onLoginSubmit = async (e) => {
		const formData = new FormData(loginRef.current);
		const email = formData.get("email");
		const password = formData.get("password");

		if (!email || !password) {
			return alert("Please fill all fields");
		}

		const action = e.target.dataset.action;

		switch (action) {
			case "buyer":
				dispatch(setCurrentUser(email, password, false));
				Router.push("/");
				break;
			case "seller":
				dispatch(setCurrentUser(email, password, true));
				Router.push("/");
				break;
		}
	};
	return (
		// create a beautiful form with tailwind
		<div className="flex flex-col items-center bg-gray-100 sign-in py-desktop">
			<form
				className="flex flex-col items-center justify-center gap-4"
				onSubmit={(e) => e.preventDefault()}
				ref={loginRef}
			>
				<Input
					label="Email"
					name="email"
					required
					type="email"
					placeholder="Please type your email"
					onChange={onChange}
				/>
				<Input
					label="Password"
					name="password"
					required
					type="password"
					placeholder="Please type your password"
					onChange={onChange}
				/>
				<div className="button-group flex flex-col items-center gap-4 w-[35rem]">
					<div className="flex flex-row justify-between w-full">
						<Button
							type="submit"
							data-action="buyer"
							text="Intra in Cont"
							buttonStyle="secondary"
							onClick={onLoginSubmit}
						/>
						<Button
							text="Intra in Cont Vanzator"
							type="submit"
							data-action="seller"
							buttonStyle="secondary"
							onClick={onLoginSubmit}
						/>
					</div>

					<ALink
						href="/creaza-cont"
						text="Nu ai cont? Creaza unul acum !"
						className="text-primary"
					/>
					<ALink
						href="/creaza-cont/vanzator"
						text="Sunt vanzator!"
						className="text-primary"
					/>
				</div>
			</form>
		</div>
	);
}
