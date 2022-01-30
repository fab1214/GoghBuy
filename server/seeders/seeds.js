const db = require("../config/connection");
const { User, Product } = require("../models");

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
			description: "A spooky skeleton that happens to be smoking",
			image: "skeleton-smoking.jpg",
			price: 500,
			quantity: 2,
		},
		{
			title: "Cottage Garden",
			description:
				"Just some painting of a random cottage that happens to have a garden",
			image: "cottage-garden.png",
			price: 15,
			quantity: 30,
		},
	]);

	console.log("products seeded");
	console.log(products);

	await User.deleteMany();

	await User.create({
		username: "Van Gogh",
		email: "gogh@gmail.com",
		password: "test12345",
		profilePic: "van-gogh.png",
		products: [products[0], products[1], products[2]],
	});

	console.log("users seeded");

	process.exit();
});
