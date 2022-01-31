import React from "react";
// import components
import Product from "../components/Product";
import Artist from "../components/Artist";
// import apollo hooks
import { useQuery } from "@apollo/client";
import { QUERY_USERS, QUERY_PRODUCTS } from "../utils/queries";
// import stylesheet & Chakra UI
import "../assets/stylesheets/Home.css";
import { HStack, Box } from "@chakra-ui/react";

const Home = () => {
	const { loading, error, data } = useQuery(QUERY_USERS);
	const users = data?.users || {};
	if (loading) return <p>Loading...</p>;
	// console.log(users);

	return (
		<div className="home">
			<div className="home-container">
				<img
					className="home-banner"
					src={"/images/polygonal19.jpg"}
					alt="banner"
				/>

				<HStack spacing={8}>
					<Box>
						{users.map((users) => (
							<Artist
								key={users._id}
								id={users._id}
								name={users.username}
								image={users.profilePic}
							/>
						))}
					</Box>
					{/* <Box>
						{users.map((users) => {
							// console.log(users.products);
							<Product
								products={users}
								// key={users.products._id}
								// title={users.products.title}
								// image={users.products.image}
								// price={users.products.price}
							/>;
						})}
					</Box> */}
				</HStack>
			</div>
		</div>
	);
};

export default Home;
