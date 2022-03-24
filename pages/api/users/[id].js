const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const prisma = require("lib/prisma/prisma");
import getConfig from "next/config";

import { apiHandler } from "helpers/api/api-handler";

const { serverRuntimeConfig } = getConfig();

const handler = (req, res) => {
	switch (req.method) {
		case "GET":
			return getUser(req, res);
		case "PATCH":
			return updateUser();

		default:
			return res.status(405).end(`Method ${req.method} not allowed`);
	}

	async function updateUser() {
		const { id } = req.user;
		const bearer = req.headers.authorization.split(" ")[1];
		const user = await prisma.user.findUnique({
			where: {
				id,
			},
		});
		if (!user) {
			return res.status(404).end("User not found");
		}
		if (user.id !== parseInt(id)) {
			return res.status(403).end("Forbidden");
		}

		await prisma.user.update({
			where: {
				id,
			},
			data: {
				...req.body,
			},
		});

		// Get the updated user
		const updatedUser = await prisma.user.findUnique({
			where: {
				id,
			},
		});
		delete updatedUser.password;
		delete updateUser.createdAt;
		delete updateUser.updatedAt;
		return res.status(200).json(updatedUser);
	}

	async function getUser(req, res) {
		const { id } = req.user;
		const user = await prisma.user.findUnique({
			where: {
				id,
			},
		});
		if (!user) {
			return res.status(404).end("User not found");
		}
		if (user.id !== parseInt(id)) {
			return res.status(403).end("Forbidden");
		}

		delete updatedUser.password;
		delete updateUser.createdAt;
		delete updateUser.updatedAt;

		return res.status(200).json(user);
	}
};

export default apiHandler(handler);
