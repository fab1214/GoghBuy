
import { gql } from "@apollo/client";

export const QUERY_ME = gql`
{
    me {
      _id
      username
      email
      profilePic
      bio
      products {
        _id
        title
        description
        image
        price
        quantity
        rating
      }
      order {
        _id
        purchaseDate
        products {
          _id
          title
          description
          image
          price
          quantity
          rating
        }
      }
    }
  }
`;

export const QUERY_USERS = gql`
	query {
		users {
			_id
			username
			email
			profilePic
			bio
			products {
				_id
				title
				description
				image
				price
				quantity
        rating
			}
		}
	}
`;

export const QUERY_USER = gql`
query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      products {
        _id
        title
        description
        image
        price
        quantity
        rating
      }
    }
  }
`;

export const QUERY_PRODUCTS = gql`
	query products($username: String) {
		products(username: $username) {
			_id
			title
			description
			image
			price
			quantity
      rating
		}
	}
`;

export const QUERY_PRODUCT = gql`
	query product($_id: ID!) {
		product(_id: $_id) {
			_id
			title
			description
			image
			price
			quantity
      rating
		}
	}
`;

export const QUERY_CATEGORIES = gql`
query {
    categories {
      _id
      name
      products {
        _id
        description
        image
        price
        quantity
        rating
      }
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;
