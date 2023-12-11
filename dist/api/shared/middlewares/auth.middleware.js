"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const jwt_adapter_1 = require("@src/config/jwt.adapter");
const response_1 = require("@src/domain/wrappers/response");
const user_repository_impl_1 = require("@src/infrastructure/repositories/user.repository.impl");
const authMiddleware = async (req, res, next) => {
    const authorization = req.header("Authorization");
    if (!authorization) {
        return res.status(401).json(response_1.ApiResponse.unauthorized({
            message: "No se ha enviado el token de autenticación",
            errors: [],
        }));
    }
    if (!authorization.startsWith("Bearer ")) {
        return res.status(401).json(response_1.ApiResponse.unauthorized({
            message: "El token de autenticación no es valido",
            errors: [],
        }));
    }
    const token = authorization.split(" ")[1];
    const payload = await jwt_adapter_1.JwtAdapter.validateToken(token);
    if (!payload) {
        return res.status(401).json(response_1.ApiResponse.unauthorized({
            message: "El token de autenticación no es valido",
            errors: [],
        }));
    }
    const user = user_repository_impl_1.userRepository.getById(payload.id);
    if (!user) {
        return res.status(401).json(response_1.ApiResponse.unauthorized({
            message: "El token de autenticación no es valido",
            errors: [],
        }));
    }
    req.body.user = user;
    next();
};
exports.authMiddleware = authMiddleware;
//# sourceMappingURL=auth.middleware.js.map