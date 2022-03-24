// get categories json file
const categories = require("./categories.json");

// get prisma from lib
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
	// Create user
	const user = await prisma.user.create({
		data: {
			first_name: "test",
			last_name: "test",
			address: "",
			phoneNumber: "",
			email: "test@yahoo.com",
			password: "123456",
		},
	});

	categories.map((category) => {
		prisma.categories.create({
			data: {
				name: category.name,
				image: category.image,
			},
		});
	});
}

main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(() => {
		prisma.$disconnect();
	});
