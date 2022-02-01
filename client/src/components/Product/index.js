import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_PRODUCT } from "../../utils/queries";
import {
	Button,
	Box,
	Image,
	Heading,
	Text,
	Flex,
	Container,
	Center,
	Spacer,
} from "@chakra-ui/react";

import "../../assets/stylesheets/Product.css";
import { useStateValue } from "../../StateProvider";

const Product = (item) => {
	const { id, title, price, image, description } = item;
	console.log(item);

	const [{ cart }, dispatch] = useStateValue();

	console.log("This is the cart >>>", cart);

	const addToCart = () => {
		// dispatch the item into the data layer
		dispatch({
			type: "ADD_TO_CART",
			product: {
				id: id,
				title: title,
				image: image,
				price: price,
				// rating: rating,
			},
		});
	};

	return (
		<Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
			<Container>
				<Center>
					<Heading as="h3" size="lg">
						{title}
					</Heading>
				</Center>
				<Center>
					<Image
						boxSize="150px"
						objectFit="contain"
						src={`/images/${image}`}
						alt="Art image"
					/>
				</Center>
				<Center>
					<Text>{description}</Text>
				</Center>
				<Flex>
					<Text>${price}</Text>
					<Spacer />
					<Button size="sm" colorScheme="blue" onClick={addToCart}>
						Add to Cart
					</Button>
				</Flex>
			</Container>
		</Box>
	);
};

export default Product;
