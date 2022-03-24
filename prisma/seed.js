// get categories json file
const categoriesJson = require("./categories.json");

// get prisma from lib
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const bcrypt = require("bcrypt");

const main = async () => {
	const createMany = await prisma.categories.createMany({
		data: categoriesJson,
	});

	// Create user
	const user = await prisma.user.create({
		data: {
			first_name: "test",
			last_name: "test",
			adress: "",
			phoneNumber: "",
			email: "testtest@yahoo.com",
			password: await bcrypt.hash("test", 10),
		},
	});
};

main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(() => {
		prisma.$disconnect();
	});
