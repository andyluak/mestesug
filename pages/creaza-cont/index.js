import React, { useState } from 'react';
import Button from 'components/Button/Button';
import Input from 'components/Input/Input';
import Router from 'next/router';

export default function CreazaCont() {
	const [submitMessage, setSubmitMessage] = useState('');
	const onChange = (e) => {
		console.log(e.target.value);
	};

	const createAccount = async (user) => {
		const response = await fetch('/api/users/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
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
		const email = data.get('email');
		const password = data.get('password');
		const firstName = data.get('firstName');
		const lastName = data.get('lastName');
		const adress = data.get('adress');
		const confirmPassword = data.get('confirmPassword');
		const phone = data.get('phone');

		// Validate form data
		if (!email || !password || !firstName || !lastName || !adress) {
			return alert('Please fill all fields');
		}

		// Check if password && confirmPassword match
		if (password !== confirmPassword) {
			return alert('Passwords do not match');
		}

		const user = {
			email,
			password,
			firstName,
			lastName,
			adress,
			phone,
		};

		let res = createAccount(user);
		res.then((data) => {
			if (data.user) {
				Router.push('/creaza-cont/sucess?success=true');
			} else {
				Router.push('/creaza-cont/sucess');
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
					label="First Name"
					name="firstName"
					required
					type="text"
					placeholder="Please type your first name"
					onChange={onChange}
				/>
				<Input
					label="Last Name"
					name="lastName"
					required
					type="text"
					placeholder="Please type your last name"
					onChange={onChange}
				/>

				<Input
					label="Adress"
					name="adress"
					required
					type="text"
					placeholder="Please type your adresss"
					onChange={onChange}
				/>

				<Input
					label="Phone number"
					name="phone"
					required
					type="tel"
					placeholder="Please type your phone number"
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
