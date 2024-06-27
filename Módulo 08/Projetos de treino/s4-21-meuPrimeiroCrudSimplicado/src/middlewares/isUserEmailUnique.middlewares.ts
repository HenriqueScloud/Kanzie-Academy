import { NextFunction, Request, Response } from "express";
import { UserDataBase } from "../database/user.database";

export class IsUserEmailUnique{
  static execute(req:Request, res: Response,next: NextFunction){
    if (UserDataBase.some(user=>user.email === req.body.email)){
      return res.status(409).json({massege: "email já existente"})
    }
    next();// sempre tem que existir o next();
  }
}