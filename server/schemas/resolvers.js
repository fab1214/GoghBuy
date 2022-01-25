const { User, Product } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
	Query: {
		users: async () => {
			return User.findOne().select("-__v -password");
		},
	},
};

module.exports = resolvers;
