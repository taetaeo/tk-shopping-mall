import { gql } from "apollo-server-express";

const cartSchema = gql`
  type CartItem {
    id: ID!
    amount: Int!
    product: Product!
  }

  extend type Query {
    cart: [CartItem!]
  }

  extend type Mutation {
    addCart(productId: ID!): CartItem!
  }
`;
export default cartSchema;
