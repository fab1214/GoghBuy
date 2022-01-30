import React from "react";
// import components
import Product from "../components/Product";
import Artist from "../components/Artist";
// import apollo hooks
import { useQuery } from "@apollo/client";
import { QUERY_USERS } from "../utils/queries";
// import stylesheet & Chakra UI
import "../assets/stylesheets/Home.css";
import { HStack, Box } from "@chakra-ui/react";

// import images
// const banner = require("../../public/Images/poly");

const Home = () => {
	// const goghPic = require("../assets/img/van-gogh.png");
	// const daliPic = require("../assets/img/salvador-dali.png");
	// const starryNight = require("../assets/img/art/starry-night.png");
	// const skeletonSmoking = require("../assets/img/art/skeleton-smoking.jpg");
	// const cottage = require("../assets/img/art/cottage-garden.png");
	// const blossom = require("../assets/img/art/almond-blossoms.png");
	// const selfPortrait = require("../assets/img/art/self-portrait.png");
	// const park = require("../assets/img/art/park.jpg");
	// const disintegration = require("../assets/img/art/disintegration.jpg");
	// const memory = require("../assets/img/art/memory.jpg");
	const { loading, error, data } = useQuery(QUERY_USERS);
	const users = data?.users || {};
	if (loading) return <p>Loading...</p>;
	console.log(users);

	return (
		<div className="home">
			<div className="home-container">
				<img
					className="home-banner"
					src={"/images/polygonal19.jpg"}
					alt="banner"
				/>

				<HStack spacing={8}>
					{users.map((users) => (
						<Artist
							key={users._id}
							id={users._id}
							name={users.username}
							image={users.profilePic}
						/>
					))}
					{/* <Artist
						id="123123"
						name="Van Gogh"
						image={goghPic}
						description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
						neque odit totam repellat consequuntur aliquid maiores rem a esse!
						Quia commodi enim consectetur facilis vitae quos amet dolor sunt at?"
					/>
					<Product
						id="123451"
						title="Starry Night"
						price={29.99}
						image={starryNight}
						rating={4}
					/>
					<Product
						title="Skeleton Smoking"
						price={69.99}
						image={skeletonSmoking}
						rating={5}
					/>
					<Product
						id="123452"
						title="Cottage Garden"
						price={20.99}
						image={cottage}
						rating={2}
					/> */}
				</HStack>
			</div>
		</div>
	);
};

export default Home;

{
	/* <HStack spacing={8}>
					<Product
						id="123453"
						title="The Disintegration of the Persistence of Memory"
						price={25.99}
						image={disintegration}
						rating={3}
					/>
					<Product
						id="123454"
						title="The Persistence of Memory"
						price={35.99}
						image={memory}
						rating={5}
					/>
					<Artist
						id="123123"
						name="Salvador Dali"
						image={daliPic}
						description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
						neque odit totam repellat consequuntur aliquid maiores rem a esse!
						Quia commodi enim consectetur facilis vitae quos amet dolor sunt at?"
					/>
				</HStack>

				<div className="home-row">
					<Artist />
					<Product
						id="123451"
						title="Starry Night"
						price={29.99}
						image={starryNight}
						rating={4}
					/>
					<Product
						title="Skeleton Smoking"
						price={69.99}
						image={skeletonSmoking}
						rating={5}
					/>
				</div>

				<div className="home-row">
					<Product
						id="123452"
						title="Cottage Garden"
						price={20.99}
						image={cottage}
						rating={2}
					/>
					<Product
						id="123453"
						title="Almond Blossoms"
						price={25.99}
						image={blossom}
						rating={3}
					/>
					<Product
						id="123454"
						title="Self Portrait"
						price={35.99}
						image={selfPortrait}
						rating={5}
					/>
				</div>

				<div className="home-row">
					<Product
						id="123455"
						title="Park"
						price={10.99}
						image={park}
						rating={1}
					/>
				</div> */
}
