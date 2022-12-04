import { gql } from "apollo-server-express";

const userSchema = gql`
  type User {
    id: ID!
    email: String
    uid: String
    cartId: [String]
    likes: [String]
  }
  extend type Query {
    user: [User!]
  }
`;
export default userSchema;
