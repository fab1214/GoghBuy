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
			rating: 4
		},
		{
			title: "Skeleton Smoking",
			description: "A spooky skeleton that happens to be smoking.",
			image: "skeleton-smoking.jpg",
			price: 500,
			quantity: 2,
			rating: 3
		},
		{
			title: "Cottage Garden",
			description:
				"Just some painting of a random cottage that happens to have a garden.",
			image: "cottage-garden.png",
			price: 15,
			quantity: 30,
			rating: 4
		},
		{
			title: "The Disintegration of the Persistence of Memory",
			description: "The Persistence of Memory but... disintegrated.",
			image: "disintegration.jpg",
			price: 69,
			quantity: 14,
			rating: 5
		},
		{
			title: "The Persistence of Memory",
			description:
				"The Disintegration of the Persistence of Memory but... not disintegrated.",
			image: "memory.jpg",
			price: 75,
			quantity: 12,
			rating: 5
		},
		{
			title:
				"Dream Caused by the Flight of a Bee around a Pomegranate a Second before Awakening",
			description: "The title really says it all.",
			image: "dream.jpg",
			price: 1000,
			quantity: 1,
			rating: 3
		},
		{
			title: "Che Guevara",
			description:
				"When an artist asks 'What if there were nine Che Guevaras, and what if they were all different colors?'",
			image: "che-guevara.jpg",
			price: 100,
			quantity: 5,
			rating: 2
		},
		{
			title: "Big Campbell's Soup Can",
			description: "When inspiration strikes... paint soup.",
			image: "campbell.jpg",
			price: 19,
			quantity: 42,
			rating: 2
		},
		{
			title: "Marilyn Monroe",
			description:
				"I know what you're thinking, but this was like the original Marilyn Monroe painting.",
			image: "marilyn-monroe.jpg",
			price: 75,
			quantity: 28,
			rating: 5
		},
	]);

	console.log("products seeded");
	// console.log(products);

	// await Category.deleteMany();

	// const categories = await Category.insertMany([
	// 	{ name: "Outdoors", products: [products[0], products[1]] },
	// 	{ name: "Portraits", products: [products[2], products[3]] },
	// 	{ name: "French", products: [products[4], products[5]] },
	// 	{ name: "Sports", products: [products[6], products[7]] },
	// 	{ name: "Random", products: [products[8]] },
	// ]);

	await User.deleteMany();

	await User.create({
		username: "VanGogh",
		email: "gogh@gmail.com",
		password: "test12345",
		profilePic: "van-gogh.png",
		bio: "Van Gogh is a Dutch artist that liked ears? Or did he hate ears? I know there is something to do with ears.",
		products: [products[0], products[1], products[2]],
	});

	await User.create({
		username: "SalvadorDali",
		email: "dali@gmail.com",
		password: "test12345",
		profilePic: "salvador-dali.png",
		bio: "Salvador Dali is a painter that happened to also have a pet ant eater.",
		products: [products[3], products[4], products[5]],
	});

	await User.create({
		username: "AndyWarhol",
		email: "warhol@gmail.com",
		password: "test12345",
		profilePic: "warhol.jpg",
		bio: "Andy Warhol was a very influential artist, however he is primarily known for his role in Men in Black III",
		products: [products[6], products[7], products[8]],
	});

	console.log("users seeded");

	process.exit();
});
