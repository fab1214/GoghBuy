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
// import { useStateValue } from "../../StateProvider";
import { useStoreContext } from "../../utils/GlobalState";

const Product = (item) => {
	const { _id, title, price, image, description} = item;

	// const [state, dispatch] = useStateValue();
	const [state, dispatch] = useStoreContext();

	const {cart} = state;

	const addToCart = () => {
		// dispatch the item into the data layer
		dispatch({
			type: "ADD_TO_CART",
			product: {
				_id: item._id,
				title: item.title,
				description: item.description,
				image: item.image,
				price: item.price,
			},
		});
	};

	return (
		<Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
			<Container>
				<Center>
					<Heading as="h3" size="lg" isTruncated>
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
					<Button size="sm" colorScheme="orange" onClick={addToCart}>
						Add to Cart
					</Button>
				</Flex>
			</Container>
		</Box>
	);
};

export default Product;
