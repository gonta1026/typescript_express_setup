/* package */
import { Request, Response } from "express";
import { Connection } from "typeorm";
/* entiry */
import { User } from "../../entity/User";
/* response */
import { sendError, sendOK } from "../../response";

export const usersIndex = (db: Connection) => {
    return async (_req: Request, res: Response) => {
        try {
            const userRepository = db.getRepository(User);
            const users = await userRepository.find();
            return sendOK(res, users);
        } catch (e) {
            console.error(e);
            return sendError(res, 500, "error");
        }
    };
};
