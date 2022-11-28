import { gql } from "apollo-server-express";

const productSchema = gql`
  type Category {
    """
    category_lg : men | women 등 ...
    category_md : top | bottom | outer | Knit 등 ...
    category_sm : long | short | hoody 등 ...
    """
    category_lg: String!
    category_md: String!
    category_sm: String!
  }
  type Product {
    """
    id와 createdAt은 firebase에서 제공
    """
    id: ID!
    brand: String!
    name: String!
    image_url: String!
    origin_price: Int!
    discount: Int!
    category: Category!
    createdAt: Float!
  }

  extend type Query {
    products: [Product!]
    product(id: ID!): Product!
    """
    category_lg / category_md / category_sm 코드에 따라서, 상품 상세 목록들 쿼리 요청
    """
    selectedProducts(
      category_lg: String!
      category_md: String
      category_sm: String
    ): [Product!]
  }
  extend type Mutation {
    addProduct(
      brand: String!
      name: String!
      image_url: String!
      origin_price: Int!
      discount: Int!
      category_lg: String!
      category_md: String!
      category_sm: String!
    ): Product!
  }
`;

export default productSchema;
