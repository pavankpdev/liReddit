import { MikroORM } from "@mikro-orm/core";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";

// Configs
import microConfig from "./mikro-orm.config";

// Constants
import { _prod_ } from "./constants";

// Resolver
import { HelloResolver } from "./resolvers/hello";

// Entities
import { Post } from "./entities/Post";

const main = async () => {
  // Db setup
  const orm = await MikroORM.init(microConfig);
  await orm.getMigrator().up();

  // Express setup
  const app = express();

  // Apollo server setup
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [HelloResolver],
      validate: false,
    }),
  });

  apolloServer.applyMiddleware({ app });

  app.listen(4000, () => console.log("Listening on port 4000"));
};

main();
