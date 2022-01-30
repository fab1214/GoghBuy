import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@chakra-ui/react";
import { QUERY_USER, QUERY_USERS } from "../../utils/queries";
// import components
import Product from "../Product";
// import Chakra
import { Box, Image, Heading, Text, Button } from "@chakra-ui/react";

const ArtistFeed = ({ name, image, description }) => {
	const { loading, error, data } = useQuery(QUERY_USERS);
	// const users = data?.users || {};
	// if (loading) return <p>Loading...</p>;
	// console.log(data);

	return (
		<div>
			<Box p={5} shadow="md" borderWidth="0px" flex="1" borderRadius="md">
				<Heading fontSize="x1">{name}</Heading>
				<Image
					borderRadius="full"
					boxSize="150px"
					// className="artist-pfp"
					src={image}
					alt="Artist's Profile Picture"
				/>
				<Text mt={4}>{description}</Text>
			</Box>

			<Product />
		</div>
	);
};

export default ArtistFeed;
