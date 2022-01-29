import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
	ApolloProvider,
	ApolloClient,
	InMemoryCache,
	createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Navbar from "./components/Navbar";
import Cart from './pages/Cart';

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
          <Navbar />
          <div>
            <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path='/cart' component={Cart} />
            </Switch>
          </div>
        </Router>
      </ApolloProvider>
    </ChakraProvider>
  );
}

export default App;
