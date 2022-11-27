import { gql } from "graphql-tag";

export const GET_PRODUCTS = gql`
  query GET_PRODUCTS {
    products {
      id
      brand
      name
      image_url
      origin_price
      discount
      new
      category
      createdAt
    }
  }
`;

export const GET_PRODUCT = gql`
  query GET_PRODUCT($id: ID!) {
    product(id: $id) {
      id
      brand
      name
      image_url
      origin_price
      discount
      new
      category
      createdAt
    }
  }
`;
