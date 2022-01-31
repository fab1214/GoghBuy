import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_USERS, QUERY_PRODUCT } from "../utils/queries";
import ArtistFeat from "../components/FeaturedFeed/ArtistFeat";
import { Stack, HStack, Box, Container } from "@chakra-ui/react";
import ProductFeat from "../components/FeaturedFeed/ProductFeat";

const HomeFeed = () => {
	const { loading, data } = useQuery(QUERY_USERS);
	const users = data?.users || [];
	if (loading) return <div>Loading...</div>;
	// console.log(data);
	// console.log(users);
	const products = users.map((users) => users.products);
	// console.log(products);

	return (
		<Container>
			<Stack>
				<Box>
					{users.map((users) => (
						<ArtistFeat
							key={users._id}
							_id={users._id}
							name={users.username}
							bio={users.bio}
							profilePic={users.profilePic}
							products={users.products}
						/>
					))}
					<Box>
						{/* {products.map((products) => (
							<ProductFeat
								key={products._id}
								_id={products._id}
								title={products.title}
								price={products.price}
								image={products.image}
							/>
						))} */}
						{/* <ProductFeat products={products} /> */}
					</Box>
				</Box>
			</Stack>
		</Container>
	);
};

export default HomeFeed;
