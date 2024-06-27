import { NextFunction, Request, Response } from "express";
import { UsersDataBase } from "../dataBase/user.dataBase";

export class IsUserMiddlewares {
  static email(req: Request, res:Response, next: NextFunction){

    // console.log(req.body), "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAa";
    
    if(UsersDataBase.some(user=>user.email===req.body.email)){
      return res.status(409).json({message: "Email já cadastrado"})
    }
    next()
  }

}