import { NextFunction, Response, Request } from "express";
import { UserDataBase } from "../database/user.database";
export class isUserIdValid {
  static execute(req: Request, res: Response, next: NextFunction) {
    if (!UserDataBase.some((user) => user.id == Number(req.params.id))) {
      return res.status(404).json({ massege: "User Not Found." });
    }
    next();// leva para a próxima lógica !
  }
}
