export class ApiResponse<T> {
  constructor(
    public data: T,
    public message: string,
    public statusCode: number,
    public errors?: string[]
  ) {}

  static success<T>({
    data,
    message,
    statusCode,
  }: {
    data: T;
    message: string;
    statusCode: number;
  }) {
    return new ApiResponse<T>(data, message, statusCode);
  }

  static error<T>({
    message,
    statusCode,
    errors,
  }: {
    message: string;
    statusCode: number;
    errors?: string[];
  }) {
    return new ApiResponse<T>(null, message, statusCode, errors);
  }

  static unauthorized<T>({
    message,
    errors,
  }: {
    message: string;
    errors?: string[];
  }) {
    return new ApiResponse<T>(null, message, 401, errors);
  }

  static badRequest<T>({
    message,
    errors,
  }: {
    message: string;
    errors?: string[];
  }) {
    return new ApiResponse<T>(null, message, 400, errors);
  }

  static notFound<T>({
    message,
    errors,
  }: {
    message: string;
    errors?: string[];
  }) {
    return new ApiResponse<T>(null, message, 404, errors);
  }

  static internalServerError<T>({
    message,
    errors,
  }: {
    message: string;
    errors?: string[];
  }) {
    return new ApiResponse<T>(null, message, 500, errors);
  }
}
