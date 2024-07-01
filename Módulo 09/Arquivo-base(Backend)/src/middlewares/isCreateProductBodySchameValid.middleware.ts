import { NextFunction, Request, Response } from "express";
import { createProductBodySchema } from "../schemas/crud/CreateProduct.schema";

export class isCreateProductBodySchameValid {
  execute(req: Request, res: Response, next: NextFunction) {
    try {
      createProductBodySchema.parse(req.body);
      next();
    } catch (error) {
      return res.status(409).json({
        message: "user boby is not valid.",
      });
    }
  }
}
