import { gql } from "apollo-server-express";

const productSchema = gql`
  type Category {
    category_lg: String!
    category_md: String!
    category_sm: String!
  }
  type Product {
    id: ID!
    brand: String!
    name: String!
    image_url: String!
    origin_price: Int!
    discount: Int!
    new: Boolean!
    category: Category!
    createdAt: Float!
  }

  extend type Query {
    products: [Product!]
    product(id: ID!): Product!
    selectedProducts(category_lg: String!): [Product!]
  }
`;

export default productSchema;
