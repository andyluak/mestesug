import React from "react";
import Button from "components/Button/Button";
import Input from "components/Input/Input";
import Link from "next/link";
import ALink from "@/components/ALink/aLink";

export default function Autentificare() {
	const onChange = (e) => {
		console.log(e.target.value);
	};
	return (
		// create a beautiful form with tailwind
		<div className="sign-in flex flex-col items-center py-desktop bg-gray-100">
			<form className="flex flex-col gap-4 justify-center items-center">
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
