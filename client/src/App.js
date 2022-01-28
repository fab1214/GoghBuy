import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import Login from "./pages/Login";
import SignUp from './pages/SignUp';
import { StoreProvider } from "./utils/GlobalState";
import Navbar from "./components/Navbar";

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
    <ApolloProvider client={client}>
      <Router>
        <div>
          <StoreProvider>
            <Navbar />
           
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={SignUp} />
           
          </StoreProvider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
