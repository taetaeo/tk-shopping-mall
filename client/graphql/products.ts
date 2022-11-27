import { gql } from "graphql-tag";

export const GET_EVENTS = gql`
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

export const GET_EVENT = gql`
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
