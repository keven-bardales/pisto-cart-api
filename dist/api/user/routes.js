"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("@api/user/controllers/controller");
const validate_request_middleware_1 = require("@api/shared/middlewares/validate-request.middleware");
const create_user_schema_1 = require("@api/user/validation-schemas/create-user.schema");
const update_user_schema_1 = require("@api/user/validation-schemas/update-user.schema");
const getById_user_schema_1 = require("@api/user/validation-schemas/getById-user.schema");
const login_user_schema_1 = require("@api/user/validation-schemas/login-user.schema");
class UserRoutes {
    static mainRoute = "/user";
    static get routes() {
        const router = (0, express_1.Router)();
        router.get(`${this.mainRoute}/getAll`, controller_1.userController.getAll);
        router.get(`${this.mainRoute}/getById/:id`, [(0, validate_request_middleware_1.validate)(getById_user_schema_1.getByIdSchema)], controller_1.userController.getById);
        router.post(`${this.mainRoute}/create`, [(0, validate_request_middleware_1.validate)(create_user_schema_1.createUserSchema)], controller_1.userController.create);
        router.put(`${this.mainRoute}/update/:id`, [(0, validate_request_middleware_1.validate)(update_user_schema_1.updateUserSchema)], controller_1.userController.update);
        router.post(`${this.mainRoute}/login`, [(0, validate_request_middleware_1.validate)(login_user_schema_1.loginSchema)], controller_1.userController.login);
        return router;
    }
}
exports.UserRoutes = UserRoutes;
//# sourceMappingURL=routes.js.map