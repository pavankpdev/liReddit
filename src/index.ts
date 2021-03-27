import { MikroORM } from "@mikro-orm/core";
import express from "express";
import { ApolloServer } from "apollo-server-express";

// Configs
import microConfig from "./mikro-orm.config";

// Constants
import { _prod_ } from "./constants";

// Entities
import { Post } from "./entities/Post";

const main = async () => {
  // Db setup
  const orm = await MikroORM.init(microConfig);
  await orm.getMigrator().up();

  // Express setup
  const app = express();

  app.get("/", (_, res) => res.json({ YO: "YO" }));

  app.listen(4000, () => console.log("Listening on port 4000"));
};

main();
