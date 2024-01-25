export class ApiException extends Error {
  public statusCode: number;
  public message: string;
  constructor(message: string) {
    super(message);
    this.message = message;
  }
}

export class BadRequestException extends ApiException {
  constructor(message: string) {
    super(message);
    this.statusCode = 400;
  }
}

export class NotFoundException extends ApiException {
  constructor(message: string) {
    super(message);
    this.statusCode = 404;
  }
}

export class UnauthorizedException extends ApiException {
  constructor(message: string) {
    super(message);
    this.statusCode = 401;
  }
}

export class ForbiddenException extends ApiException {
  constructor(message: string) {
    super(message);
    this.statusCode = 403;
  }
}

export class InternalServerErrorException extends ApiException {
  constructor(message: string) {
    super(message);
    this.statusCode = 500;
  }
}

export class ConflictException extends ApiException {
  constructor(message: string) {
    super(message);
    this.statusCode = 409;
  }
}
