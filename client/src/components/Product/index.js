import React from "react";
// import Chakra UI
import { Button, Box, Image, Heading, Text } from "@chakra-ui/react";

// import testing images
import "../../assets/stylesheets/Product.css";
// import starryNight from "../../assets/img/art/starry-night.png";

const Product = (data) => {
	// console.log(data);
	return (
		// <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
		// 	<Heading>{title}</Heading>
		// 	<Text>{price}</Text>
		// 	<Image
		// 		boxSize="100px"
		// 		objectFit="contain"
		// 		src={`/images/${image}`}
		// 		alt="Art"
		// 	/>
		// 	<Button colorScheme="blue">Add to Cart</Button>
		// </Box>

		<Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
			<Heading>title</Heading>
			<Text>price</Text>
			<Image
				boxSize="100px"
				objectFit="contain"
				src="/images/starry-night.png"
				alt="Art"
			/>
			<Button colorScheme="blue">Add to Cart</Button>
		</Box>

		// <div className="product">
		// 	<div className="product-info">
		// 		{/* Title */}
		// 		<p>{title}</p>

		// 		{/* Price */}
		// 		<p className="product-price">
		// 			<small>$</small>
		// 			<strong>{price}</strong>
		// 		</p>

		// 		{/* Rating */}
		// 		<div className="product-rating">
		// 			{Array(rating)
		// 				.fill()
		// 				.map((_, i) => (
		// 					<p>⭐</p>
		// 				))}
		// 		</div>

		// 		{/* Image */}
		// 		<img className="product-img" src={image} alt="Starry Night" />

		// 		<Button colorScheme="blue">Add to Basket</Button>
		// 	</div>
		// </div>
	);
};

export default Product;
