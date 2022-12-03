import { gql } from "apollo-server-express";

const cartSchema = gql`
  type CartItem {
    id: ID!
    amount: Int!
    uid: String!
    createdAt: Float!
    product: Product!
  }

  extend type Query {
    cart(uid: String!): [CartItem!]
  }

  extend type Mutation {
    addCart(productId: ID!, uid: String!, count: Int): CartItem!
    updateCart(cartId: ID!, amount: Int!): CartItem!
    deleteCart(cartId: ID!): ID!
  }
`;
export default cartSchema;
