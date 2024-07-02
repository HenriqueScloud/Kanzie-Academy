import { NextFunction, Request, Response } from "express";
import { createProductBodySchema } from "../schemas/createProductBody.schema";
import { AnyZodObject, ZodError } from "zod";

interface IRequestBdoy {
  body?: AnyZodObject;
  params?: AnyZodObject;
  query?: AnyZodObject;
}

export class ValidateCreateProduct {
  static execute(schema: IRequestBdoy) {
    return async (req: Request, res: Response, next: NextFunction) => {
      try {
        if (schema.body) {
          req.body = await schema.body.parseAsync(req.body);
        }
        if (schema.params) {
          req.params = await schema.params.parseAsync(req.params);
        }
        if (schema.query) {
          req.query = await schema.query.parseAsync(req.query);
        }
        next();
      } catch (error) {
        if(error instanceof ZodError){
          return res.status(409).json({ error: "Product body is not valid." });
        }
        else{
          return res.status(409).json(error);
        }
      }
    };
  }
}
