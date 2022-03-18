const jwt = require('jsonwebtoken');
const prisma = require('lib/prisma/prisma');
import getConfig from 'next/config';

import { apiHandler } from 'helpers/api/api-handler';

const { serverRuntimeConfig } = getConfig();

export default apiHandler(handler);

const handler = (req, res) => {
	switch (req.method) {
		case 'POST':
			return authenticate();

		default:
			return res.status(405).end(`Method ${req.method} not allowed`);
	}

	function authenticate() {
		const { email, password } = req.body;

		const user = prisma.user.findUnique({
			where: {
				email: email,
			},
		});

		if (!user) throw 'Email not found';

		const isPasswordValid = bcrypt.compareSync(password, user.password);

		if (!isPasswordValid) throw 'Invalid password';

		const token = jwt.sign(
			{
				id: user.id,
				email: user.email,
			},
			serverRuntimeConfig.secret,
			{
				expiresIn: '1d',
			}
		);

		return res.status(200).json({
			id: user.id,
			email: user.email,
			token,
		});
	}
};
