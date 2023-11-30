"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const create_user_dto_1 = require("@src/domain/dtos/user/create-user.dto");
const update_user_dto_1 = require("@src/domain/dtos/user/update-user.dto");
const response_1 = require("@src/domain/wrappers/response");
class UserController {
    userRepository;
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    getAll = async (req, res, next) => {
        try {
            const users = await this.userRepository.getAll();
            if (users.length === 0) {
                return res.status(404).json(response_1.ApiResponse.error({
                    message: "No se han encontrado usuarios",
                    statusCode: 200,
                }));
            }
            res.status(200).json(response_1.ApiResponse.success({
                data: users,
                message: "Usuarios obtenidos con exito",
                statusCode: 200,
            }));
        }
        catch (error) {
            next(error);
        }
    };
    getById = async (req, res, next) => {
        try {
            const { id } = req.params;
            if (!id) {
                return res.status(400).json(response_1.ApiResponse.error({
                    message: "Id is required",
                    statusCode: 400,
                }));
            }
            const user = await this.userRepository.getById(id);
            if (!user) {
                return res.status(404).json(response_1.ApiResponse.error({
                    message: "User not found",
                    statusCode: 404,
                }));
            }
            return res.status(200).json(response_1.ApiResponse.success({
                data: user,
                message: "User fetched successfully",
                statusCode: 200,
            }));
        }
        catch (error) {
            next(error);
        }
    };
    create = async (req, res, next) => {
        try {
            const createUserDto = create_user_dto_1.CreateUserDto.create(req.body);
            const user = await this.userRepository.create(createUserDto);
            if (!user) {
                return res.status(400).json(response_1.ApiResponse.badRequest({
                    message: "Ha ocurrido un error al crear el usuario",
                    errors: ["Ha ocurrido un error al crear el usuario"],
                }));
            }
            return res.status(201).json(response_1.ApiResponse.success({
                data: user,
                message: "Usuario creado con exito",
                statusCode: 201,
            }));
        }
        catch (error) {
            next(error);
        }
    };
    update = async (req, res, next) => {
        try {
            const updateUserDto = update_user_dto_1.UpdateUserDto.create(req.body);
            const { id } = req.params;
            const foundUserId = await this.userRepository.checkIfUserExistsByParams({
                id,
            });
            if (!foundUserId) {
                return res.status(404).json(response_1.ApiResponse.error({
                    message: "User not found",
                    statusCode: 404,
                }));
            }
            const user = await this.userRepository.update(id, updateUserDto);
            if (!user) {
                return res.status(400).json(response_1.ApiResponse.badRequest({
                    message: "Ha ocurrido un error al actualizar el usuario",
                    errors: ["Ha ocurrido un error al actualizar el usuario"],
                }));
            }
            return res.status(200).json(response_1.ApiResponse.success({
                data: user,
                message: "Usuario actualizado con exito",
                statusCode: 200,
            }));
        }
        catch (error) {
            next(error);
        }
    };
}
exports.UserController = UserController;
//# sourceMappingURL=controller.js.map