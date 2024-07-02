import { NextFunction, Request, Response } from "express";
import { AnyZodObject, ZodError } from "zod";

// para criarmos um middleware mais escalavel e de forma eficais, usamos um middleware unico para fazer a verificação dos zods em geral

interface IRequestBody {
  body?: AnyZodObject;
  params?: AnyZodObject;
  query?: AnyZodObject;
}

export class ValidateRequest {
  execute(schema: IRequestBody) {
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
        if (error instanceof ZodError) {
          return res.status(409).json({
            message: "user boby is not valid.",
          });
        } else {
          return res.status(409).json({ error });
        }
      }
    };
  }
}
