import express from "express";
import { ApolloServer } from "apollo-server-express";
import schema from "./schema";
import resolvers from "./resolvers";
import { DBField, readDB } from "./dbController";

const ENDPOINT = "http://localhost:3000";
const APOLLO_STUDIO = "https://studio.apollographql.com";

(async () => {
  const server = new ApolloServer({
    typeDefs: schema,
    resolvers: resolvers,
    context: {
      db: {
        products: readDB(DBField.PRODUCTS),
        eventItems: readDB(DBField.EVENT),
      },
    },
  });

  const app = express();
  await server.start();
  server.applyMiddleware({
    app,
    path: "/graphql",
    cors: {
      origin: ["http://localhost:3000", "https://studio.apollographql.com"],
      credentials: true,
    },
  });
  await app.listen({ port: 8000 });
  // console.log("resolvers", resolvers);
  // console.log("schema", schema);
  console.log("server is listening on port 8000....");
})();
