import React from "react";
// import components
import Product from "../components/Product";
// import stylesheet & Chakra UI
import "../assets/stylesheets/Home.css";

// import images
const banner = require("../assets/img/polygonal19.jpg");

const Home = () => {
	const starryNight = require("../assets/img/art/starry-night.png");
	const skeletonSmoking = require("../assets/img/art/skeleton-smoking.jpg");
	const cottage = require("../assets/img/art/cottage-garden.png");
	const blossom = require("../assets/img/art/almond-blossoms.png");
	const selfPortrait = require("../assets/img/art/self-portrait.png");
	const park = require("../assets/img/art/park.jpg");

	return (
		<div className="home">
			<div className="home-container">
				<img className="home-banner" src={banner} alt="banner" />

				<div className="home-row">
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
				</div>
			</div>
		</div>
	);
};

export default Home;
