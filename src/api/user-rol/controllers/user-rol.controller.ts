import { CreateUserRolDto } from "@domain/dtos/user-rol/create-user-rol.dto";
import { UserRolRepository } from "@domain/repositories/user-role.repository";
import { CreateUserRolUseCase } from "@domain/use-cases/user-rol/create-user-rol.use-case";
import { GetAllUserRolUseCase } from "@domain/use-cases/user-rol/getAll-user-rol.use-case";
import { ApiResponse } from "@domain/wrappers/response";
import { userRolRepository } from "@src/infrastructure/repositories/user-rol.repository.impl";
import { NextFunction, Request, Response } from "express";

export class UserRolController {
  private static instance: UserRolController;

  constructor(private readonly userRolRepository: UserRolRepository) {}

  public static getInstance(userRolRepository: UserRolRepository) {
    if (this.instance) return this.instance;

    return new UserRolController(userRolRepository);
  }

  public getAll = (req: Request, res: Response, next: NextFunction) => {
    new GetAllUserRolUseCase(this.userRolRepository)
      .execute()
      .then((roles) => {
        if (roles.length === 0) {
          return res.status(200).json(
            ApiResponse.success({
              data: roles,
              message: "No se han encontrado roles",
              statusCode: 200,
            })
          );
        }

        return res.status(200).json(
          ApiResponse.success({
            data: roles,
            message: "Roles obtenidos con exito",
            statusCode: 200,
          })
        );
      })
      .catch((error) => {
        next(error);
      });
  };

  public create = (req: Request, res: Response, next: NextFunction) => {
    const createUserRolDto = CreateUserRolDto.fromObject(req.body);

    new CreateUserRolUseCase(this.userRolRepository)
      .execute(createUserRolDto)
      .then((user) => {
        return res.status(201).json(
          ApiResponse.success({
            data: user,
            message: "Rol creado con exito",
            statusCode: 201,
          })
        );
      })
      .catch((error) => {
        next(error);
      });
  };
}

export const userRolController = new UserRolController(userRolRepository);
