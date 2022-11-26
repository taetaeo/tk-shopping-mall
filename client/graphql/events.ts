import { gql } from "graphql-tag";

export const GET_EVENTS = gql`
  query GET_PRODUCTS {
    events {
      id
      image_main
      image_lg
      image_md
      image_thumb
      createdAt
    }
  }
`;

export const GET_EVENT = gql`
  query GET_PRODUCT($id: ID!) {
    event(id: $id) {
      id
      image_main
      image_lg
      image_md
      image_thumb
      createdAt
    }
  }
`;
export const ADD_EVENT = gql`
  mutation ADD_EVENT(
    $image_main: String
    $image_lg: String
    $image_md: String
    $image_thumb: String
  ) {
    addEvent(
      image_main: $image_main
      image_lg: $image_lg
      image_md: $image_md
      image_thumb: $image_thumb
    ) {
      image_main
      image_lg
      image_md
      image_thumb
    }
  }
`;
