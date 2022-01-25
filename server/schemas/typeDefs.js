const { gql } = require("apollo-server-express");

const typeDefs = gql`
	type User {
		_id: ID!
		username: String!
		email: String!
	}

	type Product {
		_id: ID!
		title: String
		description: String
		price: Int
		image: String
	}

	type Query {
		me: User
		users: [User]
		user(username: String!): User
	}
`;

module.exports = typeDefs;
