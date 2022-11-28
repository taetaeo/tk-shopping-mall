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
      new
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
  ) {
    selectedProducts(
      category_lg: $category_lg
      category_md: $category_md
      category_sm: $category_sm
    ) {
      id
      brand
      name
      image_url
      origin_price
      discount
      new
      createdAt
      category {
        category_lg
        category_md
        category_sm
      }
    }
  }
`;
