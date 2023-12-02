"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandlingMiddleware = void 0;
const response_1 = require("@src/domain/wrappers/response");
const errorHandlingMiddleware = (error, req, res, next) => {
    if (error instanceof SyntaxError) {
        return res.status(400).json(response_1.ApiResponse.badRequest({
            message: "Ha ocurrido un error al validar los datos",
            errors: ["El formato de los datos enviados no es correcto"],
        }));
    }
    res.status(500).json(response_1.ApiResponse.internalServerError({
        message: error.message,
        errors: ["Ha ocurrido un error en el servidor"],
    }));
};
exports.errorHandlingMiddleware = errorHandlingMiddleware;
//# sourceMappingURL=error-handler.middleware.js.map