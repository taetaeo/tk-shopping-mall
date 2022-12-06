import { gql } from "apollo-server-express";

const qnaMessagesSchema = gql`
  type QnaMessage {
    """
    password : QnA글에 삭제하기전에 password
    qnaType : 문의 유형을 나타냄 (ex. 상품문의, 배송문의 등)
    """
    id: ID!
    password: String
    text: String!
    qnaType: String
    userId: ID!
    createdAt: Float # 13 자리 숫자
  }
  extend type Query {
    """
    cursor값에 따라, 페이지당 보여질 개수
    """
    qnaMessages(cursor: ID): [Message!]! # get Messages
    qnaMessage(id: ID!, password: String!): Message! # get Message
  }
  extend type Mutation {
    createMessage(
      password: String!
      qnaType: String
      text: String!
      userId: ID!
    ): Message!
    updateMessage(id: ID!, text: String, userId: ID!): Message!
    deleteMessage(id: ID!, userId: ID!): ID!
  }
`;
export default qnaMessagesSchema;
