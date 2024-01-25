"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandlingMiddleware = void 0;
const library_1 = require("@prisma/client/runtime/library");
const bad_request_exception_1 = require("@src/domain/exceptions/bad-request.exception");
const response_1 = require("@src/domain/wrappers/response");
const errorHandlingMiddleware = (error, req, res, next) => {
    console.log(error);
    if (error instanceof SyntaxError) {
        return res.status(400).json(response_1.ApiResponse.badRequest({
            message: "Ha ocurrido un error al validar los datos",
            errors: [],
        }));
    }
    if (error instanceof bad_request_exception_1.ApiException) {
        return res.status(error.statusCode).json(response_1.ApiResponse.badRequest({
            message: error.message,
            errors: [],
        }));
    }
    if (error instanceof library_1.PrismaClientKnownRequestError) {
        return res.status(500).json(response_1.ApiResponse.badRequest({
            message: "Ha ocurrido un error de base de datos",
            errors: [],
        }));
    }
    if (error instanceof library_1.PrismaClientUnknownRequestError) {
        return res.status(500).json(response_1.ApiResponse.badRequest({
            message: "Ha ocurrido un error de base de datos",
            errors: [],
        }));
    }
    if (error instanceof library_1.PrismaClientRustPanicError) {
        return res.status(500).json(response_1.ApiResponse.badRequest({
            message: "Ha ocurrido un error de base de datos",
            errors: [],
        }));
    }
    if (error instanceof library_1.PrismaClientInitializationError) {
        return res.status(500).json(response_1.ApiResponse.badRequest({
            message: "Ha ocurrido un error de base de datos",
            errors: [],
        }));
    }
    if (error instanceof library_1.PrismaClientValidationError) {
        return res.status(500).json(response_1.ApiResponse.badRequest({
            message: "Ha ocurrido un error de base de datos",
            errors: [],
        }));
    }
    res.status(500).json(response_1.ApiResponse.internalServerError({
        message: error.message,
        errors: ["Ha ocurrido un error en el servidor"],
    }));
};
exports.errorHandlingMiddleware = errorHandlingMiddleware;
//# sourceMappingURL=error-handler.middleware.js.map