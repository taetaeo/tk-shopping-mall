import { request, RequestDocument } from "graphql-request";

const END_POINT = "http://localhost:8000/graphql";

const graphQLFetcher = (query: RequestDocument, variables = {}) =>
  request(END_POINT, query, variables);

export default graphQLFetcher;
