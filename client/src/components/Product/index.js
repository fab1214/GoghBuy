import React from "react";
// import Chakra UI
import { Button, Box, Image, Heading, Text, Flex } from "@chakra-ui/react";

// import testing images
import "../../assets/stylesheets/Product.css";
import starryNight from "../../assets/img/art/starry-night.png";
import { useStateValue } from "../../StateProvider";
const Product = ({ id, title, image, price, rating }) => {

	const [{ cart }, dispatch] = useStateValue();

	console.log('This is the cart >>>', cart)

	const addToCart = () => {
		// dispatch the item into the data layer
		dispatch({
		  type: "ADD_TO_CART",
		  product: {
			id: id,
			title: title,
			image: image,
			price: price,
			rating: rating,
		  },
		});
	  };
	return (
		<Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
			<Heading>{title}</Heading>
			<Flex direction='row'>
			{Array(rating)
			.fill()
			.map((_, i) => (
				<p>⭐</p>
			))}
			</Flex>
			<Text>{price}</Text>
			<Image boxSize="100px" objectFit="contain" src={image} alt="Art" />
			<Button colorScheme="blue" onClick = {addToCart}>Add to Cart</Button>
		</Box>
	);
};

export default Product;
