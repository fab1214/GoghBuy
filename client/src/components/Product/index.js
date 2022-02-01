import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_PRODUCT } from "../../utils/queries";
import { Button, Box, Image, Heading, Text } from "@chakra-ui/react";

const Product = (item) => {
	const { title, price, image, description } = item;
	console.log(item);

	return (
		<Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
			<Heading>{title}</Heading>
			<Text>{price}</Text>
			<Image
				boxSize="100px"
				objectFit="contain"
				src={`/images/${image}`}
				alt="Art image"
			/>
			<Text>{description}</Text>
			<Button colorScheme="blue">Add to Cart</Button>
		</Box>
	);
};

export default Product;
