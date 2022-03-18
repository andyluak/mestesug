const bcrypt = require('bcrypt');
const prisma = require('lib/prisma/prisma');

/**
 *
 * model User {
  id         Int      @id @default(autoincrement())
  first_name String   @db.VarChar(255)
  last_name  String   @db.VarChar(255)
  adress     String   @db.VarChar(300)
  email      String   @db.VarChar(255)
  password   String   @db.VarChar(255)
  createdAt  DateTime @default(now())
  updatedAt  DateTime @updatedAt
}

 *
 */
async function register(req, res) {
	// extract the body
	const { firstName, lastName, adress, phone, email, password } = req.body;

	// check if the email is already in use
	const user = await prisma.user.findUnique({
		where: {
			email: email,
		},
	});

	if (user) {
		return res.status(200).send({ message: 'Email already in use' });
	}

	// hash the password
	const hashedPassword = await bcrypt.hash(password, 10);

	// create the user
	const newUser = await prisma.user.create({
		data: {
			first_name: firstName,
			last_name: lastName,
			adress,
			phoneNumber: phone,
			email,
			password: hashedPassword,
		},
	});

	// send the response
	res.status(200).send({
		message: 'User created successfully',
		user: newUser,
	});
}

export default register;
