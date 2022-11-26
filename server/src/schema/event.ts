import { gql } from "apollo-server-express";

const eventSchema = gql`
  type Event {
    id: ID!
    image_main: String
    image_lg: String
    image_md: String
    image_thumb: String
    createdAt: Float!
  }

  extend type Query {
    events: [Event!]
    event(id: ID!): Event!
  }
  extend type Mutation {
    addEvent(
      image_main: String
      image_lg: String
      image_md: String
      image_thumb: String
    ): Event!
  }
`;

export default eventSchema;
