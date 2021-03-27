import { MikroORM } from "@mikro-orm/core";

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
};

main();
