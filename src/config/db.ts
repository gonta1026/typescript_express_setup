/* package */
import "reflect-metadata";
import { createConnection } from "typeorm";
/* orm */
import ormConfig from "../../ormconfig";
require('dotenv').config();
const env = process.env;

const database = env.DB_NAME || "";
const username = env.DB_USER || "";
const password = env.DB_PASS || "";
const host = env.DB_HOST || "";
const port = Number(env.DB_PORT) || 3306;

export const genConnection = async () => createConnection(ormConfig);
