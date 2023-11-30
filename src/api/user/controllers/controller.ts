import { UserRepository } from "@domain/repositories/user.repository";
import { CreateUserDto } from "@src/domain/dtos/user/create-user.dto";
import { UpdateUserDto } from "@src/domain/dtos/user/update-user.dto";
import { ApiResponse } from "@src/domain/wrappers/response";
import { NextFunction, Request, Response } from "express";

export class UserController {
  constructor(private readonly userRepository: UserRepository) {}

  public getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const users = await this.userRepository.getAll();

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
    } catch (error) {
      next(error);
    }
  };

  public getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json(
          ApiResponse.error({
            message: "Id is required",
            statusCode: 400,
          })
        );
      }

      const user = await this.userRepository.getById(id);

      if (!user) {
        return res.status(404).json(
          ApiResponse.error({
            message: "User not found",
            statusCode: 404,
          })
        );
      }

      return res.status(200).json(
        ApiResponse.success({
          data: user,
          message: "User fetched successfully",
          statusCode: 200,
        })
      );
    } catch (error) {
      next(error);
    }
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
    try {
      const updateUserDto = UpdateUserDto.create(req.body);

      const { id } = req.params;

      const foundUserId = await this.userRepository.checkIfUserExistsByParams({
        id,
      });

      if (!foundUserId) {
        return res.status(404).json(
          ApiResponse.error({
            message: "User not found",
            statusCode: 404,
          })
        );
      }

      const user = await this.userRepository.update(id, updateUserDto);

      if (!user) {
        return res.status(400).json(
          ApiResponse.badRequest({
            message: "Ha ocurrido un error al actualizar el usuario",
            errors: ["Ha ocurrido un error al actualizar el usuario"],
          })
        );
      }

      return res.status(200).json(
        ApiResponse.success({
          data: user,
          message: "Usuario actualizado con exito",
          statusCode: 200,
        })
      );
    } catch (error) {
      next(error);
    }
  };
}
