"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRolController = exports.UserRolController = void 0;
const create_user_rol_dto_1 = require("@domain/dtos/user-rol/create-user-rol.dto");
const create_user_rol_use_case_1 = require("@domain/use-cases/user-rol/create-user-rol.use-case");
const getAll_user_rol_use_case_1 = require("@domain/use-cases/user-rol/getAll-user-rol.use-case");
const response_1 = require("@domain/wrappers/response");
const user_rol_repository_impl_1 = require("@src/infrastructure/repositories/user-rol.repository.impl");
class UserRolController {
    userRolRepository;
    static instance;
    constructor(userRolRepository) {
        this.userRolRepository = userRolRepository;
    }
    static getInstance(userRolRepository) {
        if (this.instance)
            return this.instance;
        return new UserRolController(userRolRepository);
    }
    getAll = (req, res, next) => {
        new getAll_user_rol_use_case_1.GetAllUserRolUseCase(this.userRolRepository)
            .execute()
            .then((roles) => {
            if (roles.length === 0) {
                return res.status(200).json(response_1.ApiResponse.success({
                    data: roles,
                    message: "No se han encontrado roles",
                    statusCode: 200,
                }));
            }
            return res.status(200).json(response_1.ApiResponse.success({
                data: roles,
                message: "Roles obtenidos con exito",
                statusCode: 200,
            }));
        })
            .catch((error) => {
            next(error);
        });
    };
    create = (req, res, next) => {
        const createUserRolDto = create_user_rol_dto_1.CreateUserRolDto.fromObject(req.body);
        new create_user_rol_use_case_1.CreateUserRolUseCase(this.userRolRepository)
            .execute(createUserRolDto)
            .then((user) => {
            return res.status(201).json(response_1.ApiResponse.success({
                data: user,
                message: "Rol creado con exito",
                statusCode: 201,
            }));
        })
            .catch((error) => {
            next(error);
        });
    };
}
exports.UserRolController = UserRolController;
exports.userRolController = new UserRolController(user_rol_repository_impl_1.userRolRepository);
//# sourceMappingURL=user-rol.controller.js.map