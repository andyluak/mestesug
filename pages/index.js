import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Button from "../components/Button/Button";
import styles from "../styles/Home.module.css";

const prisma = require("lib/prisma/prisma");

export async function getServerSideProps(context) {
	const categories = await prisma.categories.findMany({});

	// Delete createdAt and updatedAt fields
	categories.forEach((category) => {
		delete category.createdAt;
		delete category.updatedAt;
	});
	return {
		props: { categories }, // will be passed to the page component as props
	};
}

export default function Home({ categories }) {
	return (
		<div>
			<Head>
				<title>Mestesug</title>
				<meta
					name="description"
					content="Mestesug este un site de comercializare produse handmade"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<div
					className={`${styles["hero-container"]}  hero-container relative h-96 p-0 w-auto`}
				>
					<ul className="z-10 flex flex-row items-center justify-center w-full gap-4 text-sm text-center transition-all secondary-header sm:gap-8 p-mobile hover:bg-primary hover:text-secondary text-primary">
						<li className="transition-all duration-200 hover:font-bold">
							Bijuterii
						</li>
						<li className="transition-all duration-200 hover:font-bold">
							Imbracaminte & Incaltaminte
						</li>
						<li className="transition-all duration-200 hover:font-bold">
							Decor & Casa
						</li>
						<li className="transition-all duration-200 hover:font-bold">
							Jucarii
						</li>
					</ul>
					<div className="flex flex-col items-center justify-center hero-header-container px-mobile py-mobile sm:py-8">
						<h1 className="pb-16 text-3xl text-center text-primary sm:text-4xl sm:pb-32">
							Descopera produse unice de la cei mai creativi
							producatori
						</h1>
						<div className="flex flex-row gap-8 hero-button-group">
							<Button text="Categorii" buttonStyle={"primary"} />
							<Button
								text="Vanzatorii Lunii"
								buttonStyle={"secondary"}
							/>
						</div>
					</div>
				</div>

				<div className="popular-categories p-mobile sm:p-desktop">
					<h3 className="pb-8 text-2xl">
						Descopera cele mai populare categorii
					</h3>
					<div className="flex flex-col items-center gap-8 popular-categories-container sm:flex-row sm:justify-between">
						{categories.map((category, index) => (
							<div
								className="grid-item shadow-md bg-transparent shadow-gray-300 w-[15%] sm:w-[20%] h-full grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer"
								key={index}
							>
								<div className="relative w-full grid-item-image-container h-52">
									<Image
										src={`/images/categories/${category.image}`}
										layout="fill"
									/>
								</div>
								<Link href={`/categories/${category.slug}`}>
									<h2 className="py-4 text-lg text-center">
										{category.name}
									</h2>
								</Link>
							</div>
						))}
					</div>
				</div>
			</main>
		</div>
	);
}
