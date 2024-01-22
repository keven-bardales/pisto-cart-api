"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConflictException = exports.InternalServerErrorException = exports.ForbiddenException = exports.UnauthorizedException = exports.NotFoundException = exports.BadRequestException = exports.ApiException = void 0;
class ApiException extends Error {
    statusCode;
    message;
    constructor(message) {
        super(message);
        this.message = message;
    }
}
exports.ApiException = ApiException;
class BadRequestException extends ApiException {
    constructor(message) {
        super(message);
        this.statusCode = 400;
    }
}
exports.BadRequestException = BadRequestException;
class NotFoundException extends ApiException {
    constructor(message) {
        super(message);
        this.statusCode = 404;
    }
}
exports.NotFoundException = NotFoundException;
class UnauthorizedException extends ApiException {
    constructor(message) {
        super(message);
        this.statusCode = 401;
    }
}
exports.UnauthorizedException = UnauthorizedException;
class ForbiddenException extends ApiException {
    constructor(message) {
        super(message);
        this.statusCode = 403;
    }
}
exports.ForbiddenException = ForbiddenException;
class InternalServerErrorException extends ApiException {
    constructor(message) {
        super(message);
        this.statusCode = 500;
    }
}
exports.InternalServerErrorException = InternalServerErrorException;
class ConflictException extends ApiException {
    constructor(message) {
        super(message);
        this.statusCode = 409;
    }
}
exports.ConflictException = ConflictException;
//# sourceMappingURL=bad-request.exception.js.map