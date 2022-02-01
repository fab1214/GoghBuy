import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Flex, Spacer, Box } from "@chakra-ui/react";
import "./assets/stylesheets/Home.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
	ApolloProvider,
	ApolloClient,
	InMemoryCache,
	createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

// import Home from "./pages/Home";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

//establish new link to GraphQL server at its /graphql endpoint
const httpLink = createHttpLink({
	uri: "/graphql",
});

//use setContext to retrieve token from localStorage and set HTTP request headers
//of every request to include token
//tip: "_" in first parameter is a placeholder for skipping if parameter is not needed
const authLink = setContext((_, { headers }) => {
	const token = localStorage.getItem("id_token");
	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : "",
		},
	};
});
//create connection to the API
const client = new ApolloClient({
	//combine the authLink and httpLink objects so that
	//every request retrieves the token and sets the request headers before
	//making the request to the API
	link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
});

function App() {
	return (
		<ChakraProvider>
			<ApolloProvider client={client}>
				<Router>
					{/* PLACEHOLDER HEADER */}
					<Flex bg="#849bc5">
						<Box p="4">goghBuy</Box>
						<Spacer />
						<Box p="4">Cart</Box>
					</Flex>
					<img
						className="home-banner"
						src={"/images/polygonal19.jpg"}
						alt="banner"
					/>

					<div>
						<Route exact path="/" component={Home} />
						<Route exact path="/login" component={Login} />
						<Route exact path="/signup" component={SignUp} />
					</div>
				</Router>
			</ApolloProvider>
		</ChakraProvider>
	);
}

export default App;
