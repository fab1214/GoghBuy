const { User, Product } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
	Query: {
		me: async (parent, args, context) => {
			if (context.user) {
				const userData = await User.findOne({ _id: context.user._id }).select(
					"-__v -password"
				);

				return userData;
			}

			throw new AuthenticationError("Not logged in!");
		},

		// GET ALL USERS
		users: async () => {
			return User.find().select("-__v -password");
		},

		// GET A SINGLE USER BY USERNAME
		user: async (parent, { username }) => {
			return User.findOne({ username })
				.select("-__v -password")
				.populate("products")
				.populate("orders");
		},

		// GET ALL PRODUCTS
		products: async (parent, { username }) => {
			const params = username ? { username } : {};
			return Product.find(params).sort({ createdAt: -1 });
		},

		// GET ONE USER'S PRODUCT
		product: async (parent, { _id }) => {
			return Product.findOne({ _id });
		},
	},

	Mutation: {
		// LOGIN
		login: async (parent, { email, password }) => {
			const user = await User.findOne({ email });

			if (!user) {
				throw new AuthenticationError("Incorrect credentials");
			}

			const correctPw = await user.isCorrectPassword(password);

			if (!correctPw) {
				throw new AuthenticationError("Incorrect credentials");
			}

			const token = signToken(user);
			return { token, user };
		},

		// ADD USER
		addUser: async (parent, args) => {
			const user = await User.create(args);
			const token = signToken(user);

			return { token, user };
		},

		// FIXME: figure out categories
		// ADD A PRODUCT
		addProduct: async (parent, { productData }, context) => {
			if (context.user) {
				const createdProduct = await Product.create({
					...productData,
					username: context.user.username,
				});

				await User.findByIdAndUpdate(
					{ _id: context.user._id },
					{ $push: { products: productData } },
					{ new: true }
				);

				return createdProduct;
			}

			throw new AuthenticationError("Not logged in.");
		},

		// TODO: REMOVE A PRODUCT
		removeProduct: async (parent, { productData }, context) => {
			if (context.user) {
				const updatedUser = await User.findOneAndUpdate(
					{ _id: context.user._id },
					{ $pull: { products: { productData } } },
					{ new: true }
				);

				return updatedUser;
			}

			throw new AuthenticationError("Not logged in.");
		},
	},
};

module.exports = resolvers;
