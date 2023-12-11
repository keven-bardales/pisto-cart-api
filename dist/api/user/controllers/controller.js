"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = exports.UserController = void 0;
const jwt_adapter_1 = require("@src/config/jwt.adapter");
const create_user_dto_1 = require("@src/domain/dtos/user/create-user.dto");
const login_user_dto_1 = require("@src/domain/dtos/user/login-user.dto");
const update_user_dto_1 = require("@src/domain/dtos/user/update-user.dto");
const create_user_use_case_1 = require("@src/domain/use-cases/user/create-user.use-case");
const getAll_users_use_case_1 = require("@src/domain/use-cases/user/getAll-users.use-case");
const getbyId_user_use_case_1 = require("@src/domain/use-cases/user/getbyId-user.use-case");
const login_user_use_case_1 = require("@src/domain/use-cases/user/login-user.use-case");
const update_user_use_case_1 = require("@src/domain/use-cases/user/update-user.use-case");
const response_1 = require("@src/domain/wrappers/response");
const user_rol_repository_impl_1 = require("@src/infrastructure/repositories/user-rol.repository.impl");
const user_repository_impl_1 = require("@src/infrastructure/repositories/user.repository.impl");
class UserController {
    userRepository;
    roleRepository;
    constructor(userRepository, roleRepository) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
    }
    getAll = (req, res, next) => {
        new getAll_users_use_case_1.GetAllUsersUseCase(this.userRepository)
            .execute()
            .then((users) => {
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
        })
            .catch((error) => {
            next(error);
        });
    };
    getById = (req, res, next) => {
        new getbyId_user_use_case_1.GetByIdUserUseCase(this.userRepository)
            .execute(req.params.id)
            .then((user) => {
            return res.status(200).json(response_1.ApiResponse.success({
                data: user,
                message: "User fetched successfully",
                statusCode: 200,
            }));
        })
            .catch((error) => {
            next(error);
        });
    };
    create = async (req, res, next) => {
        const createUserDto = create_user_dto_1.CreateUserDto.create(req.body);
        new create_user_use_case_1.CreateUserUseCase(this.userRepository, this.roleRepository)
            .execute(createUserDto)
            .then(async (user) => {
            if (!user) {
                return res.status(400).json(response_1.ApiResponse.badRequest({
                    message: "Ha ocurrido un error al crear el usuario",
                    errors: ["Ha ocurrido un error al crear el usuario"],
                }));
            }
            const token = await jwt_adapter_1.JwtAdapter.generateToken({ id: user.id, rol: user.rol, fullName: user.fullName });
            return res.status(201).json(response_1.ApiResponse.success({
                data: {
                    user,
                    token,
                },
                message: "Usuario creado con exito",
                statusCode: 201,
            }));
        })
            .catch((error) => {
            next(error);
        });
    };
    update = async (req, res, next) => {
        const updateUserDto = update_user_dto_1.UpdateUserDto.create(req.body);
        new update_user_use_case_1.UpdateUserUseCase(this.userRepository)
            .execute(req.params.id, updateUserDto)
            .then((user) => {
            return res.status(200).json(response_1.ApiResponse.success({
                data: user,
                message: "Usuario actualizado con exito",
                statusCode: 200,
            }));
        })
            .catch((error) => {
            next(error);
        });
    };
    login = (req, res, next) => {
        const loginDto = login_user_dto_1.LoginUserDto.create(req.body);
        new login_user_use_case_1.LoginUserUseCase(this.userRepository)
            .execute(loginDto)
            .then((user) => {
            const token = jwt_adapter_1.JwtAdapter.generateToken({ id: user.id, rol: user.rol, fullName: user.fullName });
            return res.status(200).json(response_1.ApiResponse.success({
                data: token,
                message: "Usuario logueado con exito",
                statusCode: 200,
            }));
        })
            .catch((error) => {
            next(error);
        });
    };
}
exports.UserController = UserController;
exports.userController = new UserController(user_repository_impl_1.userRepository, user_rol_repository_impl_1.userRolRepository);
//# sourceMappingURL=controller.js.map