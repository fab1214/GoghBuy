import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../../utils/queries";
import Product from "../Product";

import {
	Box,
	Image,
	Heading,
	Text,
	Stack,
	HStack,
	Button,
	Flex,
	Spacer,
	Center,
	Container,
	SimpleGrid,
	Icon,
} from "@chakra-ui/react";
import "../../assets/stylesheets/Artist.css";

const Artist = (item) => {
	const { _id, name, bio, profilePic } = item;

	const { loading, data } = useQuery(QUERY_USER, {
		variables: { username: name },
	});

	if (loading) return <div>Loading...</div>;

	const productData = data?.user.products || {};

	return (
		<Flex p={25} w="full" alignItems="center" justifyContent="center">
			<Box
				d="flex"
				p={20}
				shadow="lg"
				borderWidth="3px"
				borderRadius="md"
				bg="white"
			>
				<Center w="300px">
					<Container>
						<Center fontSize="4xl" fontWeight="bold">
							{name}
						</Center>
						<Image
							borderRadius="full"
							boxSize="150px"
							className="artist-pfp"
							src={`/images/${profilePic}`}
							alt="Artist Profile Picture"
						/>
						<Text>{bio}</Text>
					</Container>
				</Center>
				{productData.map((products) => (
					<Product
						key={products._id}
						_id={products._id}
						title={products.title}
						price={products.price}
						image={products.image}
						description={products.description}
					/>
				))}
			</Box>
		</Flex>
	);
};

export default Artist;
