const { User, Product, Category, Order } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");
require('dotenv').config({ path: './.env' });
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

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
				.populate("order");
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

		categories: async (parent, args, context) => {
			const category = await Category.find({}).populate('products')
			console.log(category)
			return category;
		},

		order: async (parent, { _id }, context) => {
			if (context.user){
				const user = await User.findById(context.user._id).populate({
					path: 'order.products',
					populate: 'category',
				});
				return user.order.id(_id);
			}
		},

    checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin;
      const order = new Order({ products: args.products });
      const line_items = [];
	  
      const { products } = await order.populate("products");

      for (let i = 0; i < products.length; i++) {
        const product = await stripe.products.create({
          name: products[i].title,
          description: products[i].description,
        //   images: [`${url}/images/${products[i].image}`],
        });

        const price = await stripe.prices.create({
          product: product.id,
          unit_amount: products[i].price * 100,
          currency: "usd",
        });

        line_items.push({
          price: price.id,
          quantity: 1,
        });
      }

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items,
        mode: "payment",
        success_url: `${url}/success`,
        cancel_url: `${url}/`,
      });

      return { session: session.id };
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
