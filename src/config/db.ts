/* package */
import "reflect-metadata";
import { createConnection } from "typeorm";
/* orm */
// import ormConfig from "../../ormconfig";
require('dotenv').config();
const env = process.env;

const database = env.DB_NAME || "";
const username = env.DB_USER || "";
const password = env.DB_PASS || "";
const host = env.DB_HOST || "";
const port = Number(env.DB_PORT) || 3306;

export const genConnection = async () => createConnection({
    type: "mysql",
    host: env.DB_HOST,
    port: Number(env.DB_PORT),
    username: env.DB_USER,
    password: env.DB_PASS,
    database: env.DB_NAME,
    synchronize: false,
    logging: env.NODE_ENV == "production" ? false : true,/* 本番では出力しない */
    entities: ["src/entity/**/*.ts"],
    migrations: ["src/migration/**/*.ts"],
    subscribers: ["src/subscriber/**/*.ts"],
    cli: {
      entitiesDir: "src/entity",
      migrationsDir: "src/migration",
      subscribersDir: "src/subscriber",
    },
  });
