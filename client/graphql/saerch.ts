import { gql } from "graphql-tag";

export const GET_SEARCH_ITEMS = gql`
  query GET_SEARCH_ITEMS($keyword: String!) {
    searchItems(keyword: $keyword) {
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
export const GET_SEARCH_BRAND = gql`
  query GET_SEARCH_ITEMS($keyword: String!) {
    searchBrand(keyword: $keyword)
  }
`;
