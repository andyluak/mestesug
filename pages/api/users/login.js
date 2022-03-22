const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const prisma = require("lib/prisma/prisma");
import getConfig from "next/config";

import { apiHandler } from "helpers/api/api-handler";
import { use } from "bcrypt/promises";

const { serverRuntimeConfig } = getConfig();

const handler = (req, res) => {
	switch (req.method) {
		case "POST":
			return authenticate();

		default:
			return res.status(405).end(`Method ${req.method} not allowed`);
	}

	async function authenticate() {
		const { email, password } = req.body;
		let user = await prisma.user.findUnique({
			where: {
				email: email,
			},
		});

		if (!user) throw "Email not found";

		const isPasswordValid = await bcrypt.compare(password, user.password);

		if (!isPasswordValid) throw "Invalid password";

		const token = jwt.sign(
			{
				id: user.id,
				email: user.email,
			},
			serverRuntimeConfig.secret,
			{
				expiresIn: "1d",
			}
		);

		delete user.password;
		delete user.createdAt;
		delete user.updatedAt;

		return res.status(200).json({
			user,
			token,
		});
	}
};

export default apiHandler(handler);
