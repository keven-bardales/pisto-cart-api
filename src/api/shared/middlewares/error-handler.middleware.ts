import { ApiResponse } from "@src/domain/wrappers/response";
import { NextFunction, Request, Response } from "express";

export const errorHandlingMiddleware = (error: Error, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof SyntaxError) {
    return res.status(400).json(
      ApiResponse.badRequest({
        message: "Ha ocurrido un error al validar los datos",
        errors: ["El formato de los datos enviados no es correcto"],
      })
    );
  }

  res.status(500).json(
    ApiResponse.internalServerError({
      message: error.message,
      errors: ["Ha ocurrido un error en el servidor"],
    })
  );
};
