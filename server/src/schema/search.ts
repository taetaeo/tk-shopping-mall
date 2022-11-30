import { gql } from "apollo-server-express";

const searchSchema = gql`
  type Search {
    id: ID!
    product: Product!
  }

  extend type Query {
    searchItems(keyword: String!): [Product!]
    searchBrand(keyword: String!): [String]
  }
`;

export default searchSchema;
