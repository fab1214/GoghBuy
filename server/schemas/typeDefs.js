const { gql } = require("apollo-server-express");

// TODO: add category to type Orders
// TODO: mutation addProduct, should it return Product or User???
const typeDefs = gql`
	type User {
		_id: ID
		username: String!
		email: String!
		products: [Product]
		orders: [Order]
	}

	type Product {
		_id: ID
		title: String
		description: String
		image: String
		price: Float
		quantity: Int
	}

	input ProductInput {
		_id: ID
		title: String
		description: String
		image: String
		price: Float
		quantity: Int
	}

	type Order {
		_id: ID
		purchaseDate: String
		products: [Product]
	}

	type Category {
		_id: ID
		name: String
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
		user(username: String!): User
		categories: [Category]
		order(_id: ID!) : Order
		checkout(products: [ID]!): Checkout
		products(category: ID, name: String!): [Product]
	}

	type Mutation {
		addUser(username: String!, email: String!, password: String!): Auth
		login(email: String!, password: String!): Auth
		addProduct(productData: ProductInput): Product
		removeProduct(productData: ProductInput): User
		addOrder(products: [ID]!): Order
	}
`;

module.exports = typeDefs;

// addProduct(productData: ProductInput): Product
// addProduct(title: String, description: String, image: String, price: Int, quantity: Int): Product
