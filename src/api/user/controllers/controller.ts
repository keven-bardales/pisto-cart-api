import { UserRepository } from "@domain/repositories/user.repository";
import { JwtAdapter } from "@src/config/jwt.adapter";
import { CreateUserDto } from "@src/domain/dtos/user/create-user.dto";
import { LoginUserDto } from "@src/domain/dtos/user/login-user.dto";
import { UpdateUserDto } from "@src/domain/dtos/user/update-user.dto";
import { UserRolRepository } from "@src/domain/repositories/user-role.repository";
import { CreateUserUseCase } from "@src/domain/use-cases/user/create-user.use-case";
import { GetAllUsersUseCase } from "@src/domain/use-cases/user/getAll-users.use-case";
import { GetByIdUserUseCase } from "@src/domain/use-cases/user/getbyId-user.use-case";
import { LoginUserUseCase } from "@src/domain/use-cases/user/login-user.use-case";
import { UpdateUserUseCase } from "@src/domain/use-cases/user/update-user.use-case";
import { ApiResponse } from "@src/domain/wrappers/response";
import { userRolRepository } from "@src/infrastructure/repositories/user-rol.repository.impl";
import { userRepository } from "@src/infrastructure/repositories/user.repository.impl";
import { NextFunction, Request, Response } from "express";

export class UserController {
  constructor(private readonly userRepository: UserRepository, private readonly roleRepository: UserRolRepository) {}

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
    const createUserDto = CreateUserDto.create(req.body);

    new CreateUserUseCase(this.userRepository, this.roleRepository)
      .execute(createUserDto)
      .then(async (user) => {
        if (!user) {
          return res.status(400).json(
            ApiResponse.badRequest({
              message: "Ha ocurrido un error al crear el usuario",
              errors: ["Ha ocurrido un error al crear el usuario"],
            })
          );
        }

        const token = await JwtAdapter.generateToken({ id: user.id, rol: user.rol, fullName: user.fullName });

        return res.status(201).json(
          ApiResponse.success({
            data: {
              user,
              token,
            },
            message: "Usuario creado con exito",
            statusCode: 201,
          })
        );
      })
      .catch((error) => {
        next(error);
      });
  };

  public update = async (req: Request, res: Response, next: NextFunction) => {
    const updateUserDto = UpdateUserDto.create(req.body);

    new UpdateUserUseCase(this.userRepository)
      .execute(req.params.id, updateUserDto)
      .then((user) => {
        return res.status(200).json(
          ApiResponse.success({
            data: user,
            message: "Usuario actualizado con exito",
            statusCode: 200,
          })
        );
      })
      .catch((error) => {
        next(error);
      });
  };

  public login = (req: Request, res: Response, next: NextFunction) => {
    const loginDto = LoginUserDto.create(req.body);

    new LoginUserUseCase(this.userRepository)
      .execute(loginDto)
      .then((user) => {
        const token = JwtAdapter.generateToken({ id: user.id, rol: user.rol, fullName: user.fullName });

        return res.status(200).json(
          ApiResponse.success({
            data: token,
            message: "Usuario logueado con exito",
            statusCode: 200,
          })
        );
      })
      .catch((error) => {
        next(error);
      });
  };
}

export const userController = new UserController(userRepository, userRolRepository);
