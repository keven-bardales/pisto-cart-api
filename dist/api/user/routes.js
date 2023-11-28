"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
const user_datasource_impl_1 = require("./../../infrastructure/datasource/user.datasource.impl");
const user_repository_impl_1 = require("./../../infrastructure/repositories/user.repository.impl");
class UserRoutes {
    static mainRoute = "/users";
    static get routes() {
        const router = (0, express_1.Router)();
        const dataSource = new user_datasource_impl_1.UserDataSourceImpl();
        const userRepository = new user_repository_impl_1.UserRepositoryImpl(dataSource);
        const userController = new controller_1.UserController(userRepository);
        router.get(`${this.mainRoute}/getAll`, userController.getUsers);
        return router;
    }
}
exports.UserRoutes = UserRoutes;
//# sourceMappingURL=routes.js.map