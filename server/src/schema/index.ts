import { gql } from "apollo-server-express";
import cartSchema from "./cart";
import eventSchema from "./event";
import productSchema from "./products";
import searchSchema from "./search";

const linkSchema = gql`
  type Query {
    _: Boolean!
  }
  type Mutation {
    _: Boolean!
  }
`;
export default [
  linkSchema,
  eventSchema,
  productSchema,
  cartSchema,
  searchSchema,
];
