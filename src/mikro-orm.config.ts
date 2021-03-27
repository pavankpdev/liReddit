import { Post } from "./entities/Post";
import { _prod_ } from "./constants";
import { MikroORM } from "@mikro-orm/core";
import path from "path";

export default {
  migrations: {
    path: path.join(__dirname, "./migrations"),
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
  entities: [Post],
  dbName: "lireddit",
  type: "postgresql",
  debug: !_prod_,
  password: "pavan",
} as Parameters<typeof MikroORM.init>[0];
