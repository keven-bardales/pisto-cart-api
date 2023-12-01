"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRolRoutes = void 0;
const express_1 = require("express");
const validate_request_middleware_1 = require("@api/shared/middlewares/validate-request.middleware");
const user_rol_controller_1 = require("@api/user-rol/controllers/user-rol.controller");
const create_user_rol_schema_1 = require("@api/user-rol/validation-schemas/create-user-rol.schema");
class UserRolRoutes {
    static mainRoute = "/rol";
    static get routes() {
        const router = (0, express_1.Router)();
        router.post(`${this.mainRoute}/create`, [(0, validate_request_middleware_1.validate)(create_user_rol_schema_1.createUserRolSchema)], user_rol_controller_1.userRolController.create);
        router.get(`${this.mainRoute}/getAll`, user_rol_controller_1.userRolController.getAll);
        return router;
    }
}
exports.UserRolRoutes = UserRolRoutes;
//# sourceMappingURL=routes.js.map