import express from "express";
import { ApolloServer } from "apollo-server-express";
import schema from "./schema";
import resolvers from "./resolvers";
import { DBField, readDB } from "./dbController";
import env from "./envLoader";

(async () => {
  const clientUrl = env.ClIENT_URL as string;
  const port = env.PORT || 8000;

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
      origin: [clientUrl, "https://studio.apollographql.com"],
      credentials: true,
    },
  });
  await app.listen({ port: port });
  console.log(`server is listening on port ${port}...`);
})();
