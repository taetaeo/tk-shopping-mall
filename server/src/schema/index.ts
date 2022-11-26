import { gql } from "apollo-server-express";
import eventSchema from "./event";

const linkSchema = gql`
  type Query {
    _: Boolean!
  }
  type Mutation {
    _: Boolean!
  }
`;
export default [linkSchema, eventSchema];
