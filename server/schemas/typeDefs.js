const { gql } = require("apollo-server-express");

// TODO: add category to type Orders
// TODO: mutation addProduct, should it return Product or User???
const typeDefs = gql`
	type User {
		_id: ID
		username: String!
		email: String!
		profilePic: String
		bio: String
		products: [Product]
		orders: [Orders]
	}

	type Product {
		_id: ID
		title: String
		description: String
		image: String
		price: Int
		quantity: Int
	}

	input ProductInput {
		_id: ID
		title: String
		description: String
		image: String
		price: Int
		quantity: Int
	}

	type Orders {
		_id: ID
		purchaseDate: Int
		products: [Product]
	}

	type Query {
		me: User
		users: [User]
		user(username: String): User
		products(_id: ID!): [Product]
		product(_id: ID!): Product
	}

	type Mutation {
		addUser(
			username: String!
			email: String!
			password: String!
			profilePic: String
		): Auth
		login(email: String!, password: String!): Auth
		addProduct(productData: ProductInput): Product
		removeProduct(productData: ProductInput): User
	}

	type Auth {
		token: ID!
		user: User
	}
`;

module.exports = typeDefs;

// addProduct(productData: ProductInput): Product
// addProduct(title: String, description: String, image: String, price: Int, quantity: Int): Product
