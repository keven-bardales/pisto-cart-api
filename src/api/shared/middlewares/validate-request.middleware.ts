import { ApiResponse } from "@src/domain/wrappers/response";
import { NextFunction, Request, Response } from "express";
import { AnyZodObject, ZodError } from "zod";

export const validate =
  (schema: AnyZodObject) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      return next();
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json(
          ApiResponse.badRequest({
            message: "Ha ocurrido un error al validar los datos",
            errors: error.issues.map((issue) => {
              return issue.message;
            }),
          })
        );
      }
    }
  };
