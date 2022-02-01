import {gql} from '@apollo/client';

export const QUERY_ME = gql`
{
    me {
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
      }
      orders {
        _id
        purchaseDate
        products {
          _id
          title
          description
          image
          price
          quantity
        }
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
      }
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
      }
    }
  }
`;

export const QUERY_PRODUCTS = gql`
  query getProducts($category: ID) {
    products(category: $category) {
      _id
      name
      description
      price
      quantity
      image
      category {
        _id
      }
    }
  }
`;