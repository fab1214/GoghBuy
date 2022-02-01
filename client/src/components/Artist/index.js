import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../../utils/queries";
import Product from "../Product";

import { Box, Image, Heading, Text, HStack, Button } from "@chakra-ui/react";
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
		// <HStack>
		<Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
			<Heading fontSize="x1">{name}</Heading>
			<Image
				borderRadius="full"
				boxSize="150px"
				className="artist-pfp"
				src={`/images/${profilePic}`}
				alt="Artist's Profile Picture"
			/>
			<Text>{bio}</Text>

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
		</Box>
		// </HStack>
	);
};

export default Artist;
