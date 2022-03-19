import React from "react";
import Button from "components/Button/Button";
import Input from "components/Input/Input";
import ALink from "components/ALink/aLink";
import { setCookie } from "helpers/setCookie";
import Router from "next/router";

export default function Autentificare() {
	const onChange = (e) => {
		console.log(e.target.value);
	};

	const onLoginSubmit = async (e) => {
		e.preventDefault();
		// Get form data
		const form = e.target;
		const formData = new FormData(form);
		const email = formData.get("email");
		const password = formData.get("password");

		// Validate form data
		if (!email || !password) {
			return alert("Please fill all fields");
		}

		let res = await fetch("/api/users/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email,
				password,
			}),
		});

		if (res.status !== 200) return;
		const data = await res.json();

		let cookieValue = JSON.stringify({
			email: data.email,
			token: data.token,
		});
		setCookie(cookieValue);

		Router.push("/");
	};
	return (
		// create a beautiful form with tailwind
		<div className="flex flex-col items-center bg-gray-100 sign-in py-desktop">
			<form
				className="flex flex-col items-center justify-center gap-4"
				onSubmit={onLoginSubmit}
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
				<div className="button-group flex flex-col items-center gap-4 w-[25rem]">
					<Button
						type="submit"
						text="Intra in Cont"
						buttonStyle="secondary"
					/>
					<ALink
						href="/creaza-cont"
						text="Nu ai cont? Creaza unul acum !"
						className="text-primary"
					/>
				</div>
			</form>
		</div>
	);
}
