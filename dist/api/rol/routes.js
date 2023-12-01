"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("@api/user/controllers/controller");
const user_datasource_impl_1 = require("@infrastructure/datasource/user.datasource.impl");
const user_repository_impl_1 = require("@infrastructure/repositories/user.repository.impl");
const validate_request_middleware_1 = require("@api/shared/middlewares/validate-request.middleware");
const create_user_schema_1 = require("@api/user/validation-schemas/create-user.schema");
const update_user_schema_1 = require("@api/user/validation-schemas/update-user.schema");
const getById_user_schema_1 = require("@api/user/validation-schemas/getById-user.schema");
class UserRoutes {
    static mainRoute = "/user";
    static get routes() {
        const router = (0, express_1.Router)();
        const dataSource = new user_datasource_impl_1.UserDataSourceImpl();
        const userRepository = new user_repository_impl_1.UserRepositoryImpl(dataSource);
        const userController = new controller_1.UserController(userRepository);
        router.get(`${this.mainRoute}/getAll`, userController.getAll);
        router.get(`${this.mainRoute}/getById/:id`, [(0, validate_request_middleware_1.validate)(getById_user_schema_1.getByIdSchema)], userController.getById);
        router.post(`${this.mainRoute}/create`, [(0, validate_request_middleware_1.validate)(create_user_schema_1.createUserSchema)], userController.create);
        router.put(`${this.mainRoute}/update/:id`, [(0, validate_request_middleware_1.validate)(update_user_schema_1.updateUserSchema)], userController.update);
        return router;
    }
}
exports.UserRoutes = UserRoutes;
//# sourceMappingURL=routes.js.map