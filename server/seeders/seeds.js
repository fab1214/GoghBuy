const faker = require("faker");

const db = require("../config/connection");
const { User, Product, Category } = require("../models");

db.once("open", async () => {
	await User.deleteMany({});
	await Product.deleteMany({});

	// create user data
	// const userData = [];

	// for (let i = 0; i < 50; i += 1) {
	// 	const username = faker.internet.userName();
	// 	const email = faker.internet.email(username);
	// 	const password = faker.internet.password();

	// 	userData.push({ username, email, password });
	// }

	// const createdUsers = await User.collection.insertMany(userData);

	// create products
	// let createdProducts = [];
	// for (let i = 0; i < 100; i += 1) {
	// 	const title = faker.commerce.product();
	// 	const description = faker.lorem.words(Math.round(Math.random() * 20) + 1);
	// 	const image = faker.image.image(200);
	// 	const price = faker.commerce.price();
	// 	const quantity = faker.random.number();
	// 	const category = faker.commerce.department();

	// 	const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
	// 	const { username, _id: userId } = createdUsers.ops[randomUserIndex];

	// 	const createdProducts = await Product.create({
	// 		title,
	// 		description,
	// 		image,
	// 		price,
	// 		quantity,
	// 		category,
	// 	});

	// 	const updatedUser = await User.updateOne(
	// 		{ _id: userId },
	// 		{ $push: { products: createdProducts._id } }
	// 	);

	// 	createdProducts.push(createdProducts);
	// }

	console.log("all done!");
	process.exit(0);
});
