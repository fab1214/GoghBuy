import React from "react";
// import Chakra UI
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";

// import testing images
import "../../assets/stylesheets/Product.css";
import starryNight from "../../assets/img/art/starry-night.png";

const Product = ({ id, title, image, price, rating }) => {
	return (
		<div className="product">
			<div className="product-info">
				{/* Title */}
				<p>{title}</p>

				{/* Price */}
				<p className="product-price">
					<small>$</small>
					<strong>{price}</strong>
				</p>

				{/* Rating */}
				<div className="product-rating">
					{Array(rating)
						.fill()
						.map((_, i) => (
							<p>⭐</p>
						))}
				</div>

				{/* Image */}
				<img className="product-img" src={image} alt="Starry Night" />

				<Button colorScheme="blue">Add to Basket</Button>
			</div>
		</div>
	);
};

export default Product;
