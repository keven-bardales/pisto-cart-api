import {
  PrismaClientInitializationError,
  PrismaClientKnownRequestError,
  PrismaClientRustPanicError,
  PrismaClientUnknownRequestError,
  PrismaClientValidationError,
} from "@prisma/client/runtime/library";
import { ApiException } from "@src/domain/exceptions/bad-request.exception";
import { ApiResponse } from "@src/domain/wrappers/response";
import { NextFunction, Request, Response } from "express";

export const errorHandlingMiddleware = (error: Error, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof SyntaxError) {
    return res.status(400).json(
      ApiResponse.badRequest({
        message: "Ha ocurrido un error al validar los datos",
        errors: [],
      })
    );
  }

  if (error instanceof ApiException) {
    return res.status(error.statusCode).json(
      ApiResponse.badRequest({
        message: error.message,
        errors: [],
      })
    );
  }

  if (error instanceof PrismaClientKnownRequestError) {
    return res.status(500).json(
      ApiResponse.badRequest({
        message: "Ha ocurrido un error de base de datos",
        errors: [],
      })
    );
  }

  if (error instanceof PrismaClientUnknownRequestError) {
    return res.status(500).json(
      ApiResponse.badRequest({
        message: "Ha ocurrido un error de base de datos",
        errors: [],
      })
    );
  }

  if (error instanceof PrismaClientRustPanicError) {
    return res.status(500).json(
      ApiResponse.badRequest({
        message: "Ha ocurrido un error de base de datos",
        errors: [],
      })
    );
  }

  if (error instanceof PrismaClientInitializationError) {
    return res.status(500).json(
      ApiResponse.badRequest({
        message: "Ha ocurrido un error de base de datos",
        errors: [],
      })
    );
  }

  if (error instanceof PrismaClientValidationError) {
    return res.status(500).json(
      ApiResponse.badRequest({
        message: "Ha ocurrido un error de base de datos",
        errors: [],
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
