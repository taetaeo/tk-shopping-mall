import { gql } from "graphql-tag";

export const GET_CARTS = gql`
  query GET_CARTS($uid: String!) {
    cart(uid: $uid) {
      id
      amount
      uid
      createdAt
      product {
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
  }
`;
export const ADD_CART = gql`
  mutation ADD_CART($id: ID!, $count: Int, $uid: String!) {
    addCart(productId: $id, count: $count, uid: $uid) {
      id
      amount
      uid
      createdAt
      product {
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
  }
`;
export const UPDATE_CART = gql`
  mutation UPDATE_CART($id: ID!, $amount: Int!) {
    updateCart(cartId: $id, amount: $amount) {
      id
      amount
      uid
      createdAt
      product {
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
  }
`;
export const DELETE_CART = gql`
  mutation DELETE_CART($id: ID!) {
    deleteCart(cartId: $id)
  }
`;
