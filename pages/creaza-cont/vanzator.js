import React, { useState } from "react";
import Button from "components/Button/Button";
import Input from "components/Input/Input";
import Router from "next/router";

export default function CreeazaContVanzator() {
	const [submitMessage, setSubmitMessage] = useState("");
	const onChange = (e) => {
		console.log(e.target.value);
	};

	const createAccount = async (user) => {
		const response = await fetch("/api/sellers/register", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(user),
		});
		const data = await response.json();
		return data;
	};

	const onFormSubmit = (e) => {
		e.preventDefault();
		// Get form data
		const form = e.target;
		const data = new FormData(form);
		const email = data.get("email");
		const password = data.get("password");
		const confirmPassword = data.get("confirmPassword");
		const first_name = data.get("first_name");
		const last_name = data.get("last_name");
		const street = data.get("street");
		const city = data.get("city");
		const country = data.get("country");
		const phone = data.get("phone");
		const company_name = data.get("company_name");
		const company_number = data.get("company_number");

		// Validate form data
		if (
			!email ||
			!password ||
			!first_name ||
			!last_name ||
			!street ||
			!city ||
			!country ||
			!phone ||
			!company_name ||
			!company_number
		) {
			return alert("Please fill in all the fields");
		}

		// Check if password && confirmPassword match
		if (password !== confirmPassword) {
			return alert("Passwords do not match");
		}

		const user = {
			email,
			password,
			first_name,
			last_name,
			street,
			city,
			country,
			phone,
			company_name,
			company_number,
		};

		let res = createAccount(user);
		res.then((data) => {
			if (data.user) {
				Router.push("/creaza-cont/sucess?success=true");
			} else {
				Router.push("/creaza-cont/sucess");
			}
		});
	};

	return (
		<div className="flex flex-col items-center bg-white sign-in py-desktop">
			<form
				className="flex flex-col gap-4 justify-center items-center w-[25rem]"
				onSubmit={onFormSubmit}
			>
				<Input
					label="Prenume"
					name="first_name"
					required
					type="text"
					placeholder="Please type your first name"
					onChange={onChange}
				/>
				<Input
					label="Nume"
					name="last_name"
					required
					type="text"
					placeholder="Please type your last name"
					onChange={onChange}
				/>

				<Input
					label="Strada"
					name="street"
					required
					type="text"
					placeholder="Please type your street"
					onChange={onChange}
				/>

				<Input
					label="Oras"
					name="city"
					required
					type="text"
					placeholder="Please type your street"
					onChange={onChange}
				/>

				<Input
					label="Tara"
					name="country"
					required
					type="text"
					placeholder="Please type your country"
					onChange={onChange}
				/>

				<Input
					label="Numar Telefon"
					name="phone"
					required
					type="tel"
					placeholder="Please type your phone number"
					onChange={onChange}
				/>

				<Input
					label="Firma"
					name="company_name"
					required
					type="tel"
					placeholder="Please type your company name"
					onChange={onChange}
				/>
				<Input
					label="CUI"
					name="company_number"
					required
					type="tel"
					placeholder="Please type your company number"
					onChange={onChange}
				/>

				<Input
					label="Email"
					name="email"
					required
					type="email"
					placeholder="Please type your email"
					onChange={onChange}
					autoComplete="off"
				/>

				<Input
					label="Password"
					name="password"
					required
					type="password"
					placeholder="Please type your password"
					onChange={onChange}
					autoComplete="off"
				/>
				<Input
					label="Confirm Password"
					name="confirmPassword"
					required
					type="password"
					placeholder="Please type your password"
					onChange={onChange}
					autoComplete="off"
				/>
				<Button
					type="submit"
					text="Creeaza cont"
					buttonStyle="secondary"
				/>
			</form>
			<h2> {submitMessage} </h2>
		</div>
	);
}
