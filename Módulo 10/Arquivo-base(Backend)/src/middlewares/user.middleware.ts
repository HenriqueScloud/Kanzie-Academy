import { NextFunction, Request, Response } from "express";
import { UsersDataBase } from "../dataBase/user.dataBase";
import { AppErrors } from "../errors/errors";
export class IsUserMiddlewares {
  email(req: Request, res: Response, next: NextFunction) {
    if (UsersDataBase.some((user) => user.email === req.body.email)) {      
      throw res.status(409).json({
        message: "Email já cadastrado",
      })
    }
    next();
  }
}
