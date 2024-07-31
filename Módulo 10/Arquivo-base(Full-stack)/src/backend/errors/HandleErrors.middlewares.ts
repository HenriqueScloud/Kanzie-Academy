import { NextFunction, Request, Response } from "express";
import { AppErrors } from "./errors";

export class HandleErrors{
  static execute(err: Error, req:Request, res: Response, next: NextFunction){
    if( err instanceof AppErrors){
      return new AppErrors(err.statusCode, err.message)
    }
    else{
      console.log(err);
      // return res.status(500).json({error: "Internal server error."})
      return new AppErrors(500, "Internal server error.")
    }
  }
}