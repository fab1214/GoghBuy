import React from "react";
// import { useParams } from 'react-router-dom'
import Product from "../Product";
import { useQuery } from "@apollo/client";
import { QUERY_PRODUCTS } from "../../utils/queries";
// import Chakra UI
import { Box, Image, Heading, Text } from "@chakra-ui/react";

import "../../assets/stylesheets/Artist.css";

const Artist = ({ id, name, image }) => {
	const { loading, error, data } = useQuery(QUERY_PRODUCTS);
	const products = data?.products || {};
	if (loading) return <p>Loading...</p>;
	// console.log(data);
	// console.log(products);

	return (
		<Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
			<Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
				<Heading fontSize="x1">{name}</Heading>
				<Image
					borderRadius="full"
					boxSize="150px"
					// className="artist-pfp"
					src={`/images/${image}`}
					alt="Artist's Profile Picture"
				/>
				{/* <Text mt={4}>{description}</Text> */}
			</Box>
			<Product data={products} />
			{/* {products.map((products) => {
				console.log(products);
				<Product
					key={products._id}
					id={products._id}
					title={products.title}
					image={products.image}
					price={products.price}
					quantity={products.quantity}
				/>;
			})} */}
		</Box>
	);
};

export default Artist;
