export class GetPaginatedDto<T> {
  constructor(
    public readonly items: T[],
    public readonly totalItems: number,
    public readonly currentPage: number,
    public readonly totalPages: number,
    public readonly hasNextPage: boolean,
    public readonly hasPreviousPage: boolean,
    public readonly nextPage: number,
    public readonly previousPage: number,
    public readonly limit: number
  ) {}

  static fromObject<T>(object: { items: T[]; totalItems: number; currentPage: number; limit: number }) {
    const hasNextPage = object.currentPage < Math.ceil(object.totalItems / object.limit);

    const hasPreviousPage = object.currentPage > 1;

    const nextPage = object.currentPage + 1;

    const previousPage = object.currentPage - 1;

    const totalPages = Math.ceil(object.totalItems / object.limit);

    return new GetPaginatedDto<T>(object.items, object.totalItems, object.currentPage, totalPages, hasNextPage, hasPreviousPage, nextPage, previousPage, object.limit);
  }
}
