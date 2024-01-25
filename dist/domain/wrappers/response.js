"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiResponse = void 0;
class ApiResponse {
    data;
    message;
    statusCode;
    errors;
    constructor(data, message, statusCode, errors) {
        this.data = data;
        this.message = message;
        this.statusCode = statusCode;
        this.errors = errors;
    }
    static success({ data, message, statusCode }) {
        return new ApiResponse(data, message, statusCode);
    }
    static error({ message, statusCode, errors }) {
        return new ApiResponse(null, message, statusCode, errors);
    }
    static unauthorized({ message, errors }) {
        return new ApiResponse(null, message, 401, errors);
    }
    static badRequest({ message, errors }) {
        return new ApiResponse(null, message, 400, errors);
    }
    static notFound({ message, errors }) {
        return new ApiResponse(null, message, 404, errors);
    }
    static internalServerError({ message, errors }) {
        return new ApiResponse(null, message, 500, errors);
    }
}
exports.ApiResponse = ApiResponse;
//# sourceMappingURL=response.js.map