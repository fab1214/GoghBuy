import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_USER, QUERY_PRODUCTS } from "../../utils/queries";
import ProductFeat from "./ProductFeat";

import { Box, Image, Heading, Text, Button } from "@chakra-ui/react";

const ArtistFeat = (item) => {
	const { _id, name, bio, profilePic } = item;
	// console.log(item);
	// console.log(products);
	// const { title, description, image, price, quantity } = products;
	// console.log(title);

	// const { loading, data } = useQuery(QUERY_USER, {
	// 	variables: { username: name },
	// });
	// const products = data?.user.products || {};
	// if (loading) return <div>Loading...</div>;
	// console.log(data);
	// console.log("testing", products);
	const { loading, data } = useQuery(QUERY_USER, {
		variables: { username: name },
	});
	// console.log(data);
	const productData = data?.user.products || {};
	console.log(productData);
	// const userData = data?.users || [];
	// if (loading) return <div>Loading...</div>;
	// console.log(userData);

	return (
		<Box>
			<Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
				<Heading fontSize="x1">{name}</Heading>
				<Image
					borderRadius="full"
					boxSize="150px"
					src={`/images/${profilePic}`}
					alt="Artist's Profile Picture"
				/>
				<Text>{bio}</Text>
			</Box>
			<Box>
				{productData.map((products) => (
					<ProductFeat
						key={products._id}
						title={products.title}
						price={products.price}
						image={products.image}
					/>
				))}
			</Box>
		</Box>
	);
};

export default ArtistFeat;
