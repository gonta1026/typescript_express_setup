import express, { Express, Request, Response, NextFunction } from "express";
import helmet = require("helmet");/* セキュリティー対策 */
import { genConnection } from "./db"; /* DBの情報 */
import * as bodyParser from "body-parser";


/* サーバーの設定？？？ */
const configureServer = (app: Express) => {
    app.use((req: Request, res: Response, next: NextFunction) => {
        res.header("Access-Control-Allow-Origin", "*")
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
        next()
    })

    app.use(helmet());
    app.use(express.json())
    app.use( bodyParser.urlencoded({extended: true }));
    app.use(bodyParser.json());
};

/* 初期化している？？ */
export const initializeApp = async () => {
    const app = express();
    configureServer(app);
    const db = await genConnection();

    const application = {
        app,
        db,
    };
    return application;
};

export type App = ReturnType<typeof initializeApp> extends Promise<infer T>
    ? T
    : never;
