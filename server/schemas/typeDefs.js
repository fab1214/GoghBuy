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
		order: [Order]
	}

	type Product {
		_id: ID
		title: String
		description: String
		image: String
		price: Float
		quantity: Int
		rating: Int
	}

	input ProductInput {
		_id: ID
		title: String
		description: String
		image: String
		price: Float
	}

	type Order {
		_id: ID
		purchaseDate: String
		products: [Product]
	}

	type Category {
		_id: ID
		title: String
		products: [Product]
	}

	type Auth {
		token: ID!
		user: User
	}

	type Checkout {
		session: ID
	}

	type Query {
		me: User
		users: [User]

		products: [Product]
		product(_id: ID!): Product
		user(username: String!): User
		categories: [Category]
		order(_id: ID!) : Order
		checkout(products: [ID]!): Checkout
	}

	type Mutation {
		addUser(
			username: String!
			email: String!
			password: String!
			profilePic: String
		): Auth
		login(email: String!, password: String!): Auth
		addProduct(productData: ProductInput!): Product
		removeProduct(productData: ProductInput): User
		addOrder(products: [ID]!): Order
	}
`;

module.exports = typeDefs;

// addProduct(productData: ProductInput): Product
// addProduct(title: String, description: String, image: String, price: Int, quantity: Int): Product
