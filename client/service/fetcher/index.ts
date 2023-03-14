import { request, RequestDocument } from "graphql-request";

const END_POINT =
  process.env.NEXT_PUBLIC_SERVER_URL + "graphql" ||
  "http://localhost:8000/graphql";
const graphQLFetcher = (query: RequestDocument, variables = {}) =>
  request(END_POINT, query, variables);

export default graphQLFetcher;
