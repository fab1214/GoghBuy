import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_USERS, QUERY_PRODUCT } from "../utils/queries";
import Artist from "../components/Artist";
import { Stack, HStack, Box, Container } from "@chakra-ui/react";
import "../assets/stylesheets/Home.css";
import { Link } from 'react-router-dom';

const Home = () => {
	const { loading, data } = useQuery(QUERY_USERS);
	const users = data?.users || [];
	if (loading) return <div>Loading...</div>;

	// const products = users.map((users) => users.products);

	return (
		<Container className="home">
			<div className="home-container">

				<Stack>
					{users.map((users) => (
						<Artist
							key={users._id}
							_id={users._id}
							name={users.username}
							bio={users.bio}
							profilePic={users.profilePic}
							products={users.products}
						/>
					))}
				</Stack>

			</div>
		</Container>
	);
};

export default Home;
