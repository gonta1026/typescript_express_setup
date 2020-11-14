/* package */
import "reflect-metadata";
import { createConnection } from "typeorm";
/* entity */
import { User } from "../entity/User";
require('dotenv').config();
const env = process.env;

const database = env.DB_NAME || "";
const username = env.DB_USER || "";
const password = env.DB_PASS || "";
const host = env.DB_HOST || "";
const port = Number(env.DB_PORT) || 3306;

export const genConnection = async () =>
  createConnection({
    type: "mysql",
    host,
    port,
    username,
    password,
    database,
    entities: ["src/entity/**/*.ts"],
    synchronize: false,
    logging: process.env.NODE_ENV == "production" ? false : true,
    cli: {
        entitiesDir: "src/entity",
        migrationsDir: "src/migration",
        subscribersDir: "src/subscriber",
      },
  });
