const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
	title: {
		type: String,
		required: true,
		trim: true,
	},
	description: {
		type: String,
		required: true,
		minlength: 5,
		maxlength: 1000,
	},
	image: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
		min: 4.99,
	},
	quantity: {
		type: Number,
		required: true,
		min: 0,
		default: 0,
	}
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
