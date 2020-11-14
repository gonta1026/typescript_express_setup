import { Request, Response } from "express";
import { check, validationResult } from "express-validator";
import { Connection } from "typeorm";
/* entiry */
import { User } from "../../entity/User";
/* response */
import { sendError } from "../../response";


export const validateStoreCreate = [
    check("firstName").not().isEmpty(),
    check("lastName").not().isEmpty(),
    check("age").not().isEmpty(),
];

export const userCreate = (db: Connection) => {
  return async (req: Request, res: Response) => {
    try {
      const errors = validationResult(req);

      if (errors.isEmpty()) {
        const firstName = req.body.firstName || "";
        const lastName = req.body.lastName || "";
        const age = req.body.age || "";
        const userRepository = db.getRepository(User);
        const user = userRepository.create({
            firstName,
            lastName,
            age,
        });

        await userRepository.save(user);
        return res.status(200).send({
            status: 200,
            message: "success!!!"
        });
      }

      return sendError(res, 400);
    } catch (e) {
      console.error(e);
      return sendError(res, 500, "error");
    }
  };
};
