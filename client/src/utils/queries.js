import {gql} from '@apollo/client';

export const QUERY_USER = gql`
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