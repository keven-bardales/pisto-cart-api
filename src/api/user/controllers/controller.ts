import { UserRepository } from "@domain/repositories/user.repository";
import { CreateUserDto } from "@src/domain/dtos/user/create-user.dto";
import { UpdateUserDto } from "@src/domain/dtos/user/update-user.dto";
import { GetAllUsersUseCase } from "@src/domain/use-cases/user/getAll-users.use-case";
import { GetByIdUserUseCase } from "@src/domain/use-cases/user/getbyId-user.use-case";
import { UpdateUserUseCase } from "@src/domain/use-cases/user/update-user.use-case";
import { ApiResponse } from "@src/domain/wrappers/response";
import { userRepository } from "@src/infrastructure/repositories/user.repository.impl";
import { NextFunction, Request, Response } from "express";

export class UserController {
  constructor(private readonly userRepository: UserRepository) {}

  public getAll = (req: Request, res: Response, next: NextFunction) => {
    new GetAllUsersUseCase(this.userRepository)
      .execute()
      .then((users) => {
        if (users.length === 0) {
          return res.status(404).json(
            ApiResponse.error({
              message: "No se han encontrado usuarios",
              statusCode: 200,
            })
          );
        }

        res.status(200).json(
          ApiResponse.success({
            data: users,
            message: "Usuarios obtenidos con exito",
            statusCode: 200,
          })
        );
      })
      .catch((error) => {
        next(error);
      });
  };

  public getById = (req: Request, res: Response, next: NextFunction) => {
    new GetByIdUserUseCase(this.userRepository)
      .execute(req.params.id)
      .then((user) => {
        return res.status(200).json(
          ApiResponse.success({
            data: user,
            message: "User fetched successfully",
            statusCode: 200,
          })
        );
      })
      .catch((error) => {
        next(error);
      });
  };

  public create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const createUserDto = CreateUserDto.create(req.body);

      const user = await this.userRepository.create(createUserDto);

      if (!user) {
        return res.status(400).json(
          ApiResponse.badRequest({
            message: "Ha ocurrido un error al crear el usuario",
            errors: ["Ha ocurrido un error al crear el usuario"],
          })
        );
      }

      return res.status(201).json(
        ApiResponse.success({
          data: user,
          message: "Usuario creado con exito",
          statusCode: 201,
        })
      );
    } catch (error) {
      next(error);
    }
  };

  public update = async (req: Request, res: Response, next: NextFunction) => {
    const updateUserDto = UpdateUserDto.create(req.body);

    new UpdateUserUseCase(this.userRepository)
      .execute(req.params.id, updateUserDto)
      .then((user) => {
        return res.status(200).json(
          ApiResponse.success({
            data: user,
            message: "User updated successfully",
            statusCode: 200,
          })
        );
      })
      .catch((error) => {
        next(error);
      });
  };
}

export const userController = new UserController(userRepository);
