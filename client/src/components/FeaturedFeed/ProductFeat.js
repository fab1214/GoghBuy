import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_PRODUCT } from "../../utils/queries";
import { Button, Box, Image, Heading, Text } from "@chakra-ui/react";

const ProductFeat = (item) => {
	const { title, price, image } = item;
	console.log(item);
	// const productData = { products };
	// console.log(productData);
	// console.log(products.length);

	// const productData = products.map((products) => products);
	// console.log(productData);

	// const { loading, data } = useQuery(QUERY_PRODUCT, {
	// 	variables: { id: products._id },
	// });
	// console.log(data);

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
			<Button colorScheme="blue">Add to Cart</Button>
		</Box>
	);
};

export default ProductFeat;
