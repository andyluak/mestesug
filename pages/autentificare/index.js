import React from 'react';
import Button from 'components/Button/Button';
import Input from 'components/Input/Input';
import Link from 'next/link';
import ALink from '@/components/ALink/aLink';

export default function Autentificare() {
	const onChange = (e) => {
		console.log(e.target.value);
	};

	const onLoginSubmit = (e) => {
		e.preventDefault();
		// Get form data
		const form = e.target;
		const data = new FormData(form);
		const email = data.get('email');
		const password = data.get('password');

		// Validate form data
		if (!email || !password) {
			return alert('Please fill all fields');
		}

		fetch('/api/users/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		});
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
					required
					type="email"
					placeholder="Please type your email"
					onChange={onChange}
				/>
				<Input
					label="Password"
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
