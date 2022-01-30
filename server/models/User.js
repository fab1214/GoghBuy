const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcrypt");
const Product = require("./Product");
const Order = require("./Order");

const userSchema = new Schema({
	username: {
		type: String,
		required: true,
		unique: true,
		trim: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
		match: [/.+@.+\..+/, "Must match an email address"],
	},
	password: {
		type: String,
		required: true,
		minlength: 8,
	},
	profilePic: {
		type: String,
		required: false,
	},
	products: [Product.schema],
	orders: [Order.schema],
});

// aet up pre-save middleware to create password
userSchema.pre("save", async function (next) {
	if (this.isNew || this.isModified("password")) {
		const saltrounds = 10;
		this.password = await bcrypt.hash(this.password, saltrounds);
	}
	next();
});

// compare incoming password to the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
	return await bcrypt.compare(password, this.password);
};

const User = mongoose.model("User", userSchema);
module.exports = User;
