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
      createdAt
      category {
        category_lg
        category_md
        category_sm
      }
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
      createdAt
      category {
        category_lg
        category_md
        category_sm
      }
    }
  }
`;
export const GET_SELECTED_PRODUCT = gql`
  query GET_SELECTED_PRODUCT(
    $category_lg: String!
    $category_md: String
    $category_sm: String
    $cursor: ID
  ) {
    selectedProducts(
      category_lg: $category_lg
      category_md: $category_md
      category_sm: $category_sm
      cursor: $cursor
    ) {
      id
      brand
      name
      image_url
      origin_price
      discount
      createdAt
      category {
        category_lg
        category_md
        category_sm
      }
    }
  }
`;
export const ADD_PRODUCT = gql`
  mutation ADD_PRODUCT(
    $brand: String!
    $name: String!
    $image_url: String!
    $origin_price: Int!
    $discount: Int!
    $category_lg: String!
    $category_md: String!
    $category_sm: String!
  ) {
    addProduct(
      brand: $brand
      name: $name
      image_url: $image_url
      origin_price: $origin_price
      discount: $discount
      category_lg: $category_lg
      category_md: $category_md
      category_sm: $category_sm
    ) {
      brand
      name
      image_url
      origin_price
      discount
      category_lg
      category_md
      category_sm
    }
  }
`;
