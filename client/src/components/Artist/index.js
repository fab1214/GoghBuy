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
} from "@chakra-ui/react";
import "../../assets/stylesheets/Artist.css";

const Artist = (item) => {
	const { _id, name, bio, profilePic } = item;

	const { loading, data } = useQuery(QUERY_USER, {
		variables: { username: name },
	});

	if (loading) return <div>Loading...</div>;

	const productData = data?.user.products || {};
	console.log(productData);

	return (
		<Box
			p={5}
			shadow="md"
			borderWidth="2px"
			flex="1"
			borderRadius="md"
			bg="white"
		>
			<Flex direction="row" align="center">
				{/* <Box
					p={5}
					minW="md"
					shadow="md"
					borderWidth="1px"
					flex="2"
					borderRadius="md"
				> */}
				<Container>
					<Center>
						<Heading fontSize="x1">{name}</Heading>
					</Center>
					<Center>
						<Image
							borderRadius="full"
							boxSize="150px"
							align="center"
							className="artist-pfp"
							src={`/images/${profilePic}`}
							alt="Artist's Profile Picture"
						/>
					</Center>
					<Center>
						<Text>{bio}</Text>
					</Center>
				</Container>
				{/* </Box> */}

				<Spacer />

				<HStack>
					{productData.map((products) => (
						<Product
							key={products._id}
							id={products._id}
							title={products.title}
							price={products.price}
							image={products.image}
							description={products.description}
						/>
					))}
				</HStack>
			</Flex>
		</Box>

		// <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
		// 	{/* <HStack> */}
		// 	<Flex>
		// 		<Box p={15} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
		// 			<Heading fontSize="x1">{name}</Heading>
		// 			<Image
		// 				borderRadius="full"
		// 				boxSize="150px"
		// 				className="artist-pfp"
		// 				src={`/images/${profilePic}`}
		// 				alt="Artist's Profile Picture"
		// 			/>
		// 			<Text>{bio}</Text>
		// 		</Box>
		// 		<Spacer />
		// 		<HStack spacing="24px">
		// 			{productData.map((products) => (
		// 				<Product
		// 					key={products._id}
		// 					id={products._id}
		// 					title={products.title}
		// 					price={products.price}
		// 					image={products.image}
		// 					description={products.description}
		// 				/>
		// 			))}
		// 		</HStack>
		// 	</Flex>
		// 	{/* </HStack> */}
		// </Box>
	);
};

export default Artist;
