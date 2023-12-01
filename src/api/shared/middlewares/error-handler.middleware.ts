import { ApiResponse } from "@src/domain/wrappers/response";
import { NextFunction, Request, Response } from "express";

export const errorHandlingMiddleware = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(error);

  res.status(500).json(
    ApiResponse.internalServerError({
      message: error.message,
      errors: ["Ha ocurrido un error en el servidor"],
    })
  );
};
