import { JwtAdapter } from "@src/config/jwt.adapter";
import { ApiResponse } from "@src/domain/wrappers/response";
import { userRepository } from "@src/infrastructure/repositories/user.repository.impl";
import { NextFunction, Request, Response } from "express";

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const authorization = req.header("Authorization");

  if (!authorization) {
    return res.status(401).json(
      ApiResponse.unauthorized({
        message: "No se ha enviado el token de autenticación",
        errors: [],
      })
    );
  }

  if (!authorization.startsWith("Bearer ")) {
    return res.status(401).json(
      ApiResponse.unauthorized({
        message: "El token de autenticación no es valido",
        errors: [],
      })
    );
  }

  const token = authorization.split(" ")[1];

  const payload = await JwtAdapter.validateToken<{ id: string }>(token);

  if (!payload) {
    return res.status(401).json(
      ApiResponse.unauthorized({
        message: "El token de autenticación no es valido",
        errors: [],
      })
    );
  }

  const user = userRepository.getById(payload.id);

  if (!user) {
    return res.status(401).json(
      ApiResponse.unauthorized({
        message: "El token de autenticación no es valido",
        errors: [],
      })
    );
  }

  req.body.user = user;

  next();
};
