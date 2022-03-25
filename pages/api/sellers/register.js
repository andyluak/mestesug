const bcrypt = require("bcrypt");
const prisma = require("lib/prisma/prisma");

async function register(req, res) {
	// extract the body
	const {
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
	} = req.body;

	// check if the email is already in use
	const user = await prisma.sellers.findUnique({
		where: {
			email: email,
		},
	});

	if (user) {
		return res.status(200).send({ message: "Email already in use" });
	}

	// hash the password
	const hashedPassword = await bcrypt.hash(password, 10);

	// create the user
	const newUser = await prisma.sellers.create({
		data: {
			email,
			password: hashedPassword,
			first_name,
			last_name,
			street,
			city,
			country,
			phone,
			company_name,
			company_number,
		},
	});

	// send the response
	res.status(200).send({
		message: "Seller created successfully",
		user: newUser,
	});
}

export default register;
