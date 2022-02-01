const db = require("../config/connection");
const { User, Product, Category } = require("../models");

db.once("open", async () => {
	await Product.deleteMany();

	const products = await Product.insertMany([
		{
			title: "Starry Night",
			description: "A painting of a starry night.",
			image: "starry-night.png",
			price: 25,
			quantity: 10,
		},
		{
			title: "Skeleton Smoking",
			description: "A spooky skeleton that happens to be smoking.",
			image: "skeleton-smoking.jpg",
			price: 500,
			quantity: 2,
		},
		{
			title: "Cottage Garden",
			description:
				"Just some painting of a random cottage that happens to have a garden.",
			image: "cottage-garden.png",
			price: 15,
			quantity: 30,
		},
		{
			title: "The Disintegration of the Persistence of Memory",
			description: "The Persistence of Memory but... disintegrated.",
			image: "disintegration.jpg",
			price: 69,
			quantity: 14,
		},
		{
			title: "The Persistence of Memory",
			description:
				"The Disintegration of the Persistence of Memory but... not disintegrated.",
			image: "memory.jpg",
			price: 75,
			quantity: 12,
		},
	]);

	console.log("products seeded");
	// console.log(products);

	await Category.deleteMany();

	const categories = await Category.insertMany([
		{ name: "Outdoors", products: [products[0], products[1]] },
		{ name: "Portraits", products: [products[2], products[3]] },
		{ name: "French", products: [products[4], products[5]] },
		{ name: "Sports", products: [products[6], products[7]] },
		{ name: "Random", products: [products[8], products[9]] },
	]);

	await User.deleteMany();

	await User.create({
		username: "Van Gogh",
		email: "gogh@gmail.com",
		password: "test12345",
		profilePic: "van-gogh.png",
		bio: "Van Gogh is a Dutch artist that liked ears? Or did he hate ears? I know there is something to do with ears.",
		products: [products[0], products[1], products[2]],
	});

	await User.create({
		username: "Salvador Dali",
		email: "dali@gmail.com",
		password: "test12345",
		profilePic: "salvador-dali.png",
		bio: "Salvador Dali is a painter that happened to also have a pet ant eater.",
		products: [products[3], products[4]],
	});

	console.log("users seeded");

	process.exit();
});
