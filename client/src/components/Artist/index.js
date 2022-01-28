import React from "react";
// import Chakra UI
import { Box, Image, Heading, Text } from "@chakra-ui/react";

import "../../assets/stylesheets/Artist.css";
// import testing image
import profilePicture from "../../assets/img/van-gogh.png";

const Artist = ({ id, name, image, description }) => {
	return (
		<Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
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

		// <div className="artist">
		// 	<div className="artist-info">
		// 		{/* Name */}
		// 		<p>{name}</p>

		// 		{/* PFP */}
		// 		<Image
		// 			borderRadius="full"
		// 			boxSize="150px"
		// 			// className="artist-pfp"
		// 			src={image}
		// 			alt="Artist's Profile Picture"
		// 		/>

		// 		{/* Brief description */}
		// 		<p className="artist-desc">
		// 			<p>{description}</p>
		// 		</p>
		// 	</div>
		// </div>
	);
};

export default Artist;
