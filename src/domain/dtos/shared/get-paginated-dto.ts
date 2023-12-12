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

  static fromObject<T>(object: { items: T[]; totalItems: number; currentPage: number; totalPages: number; hasNextPage: boolean; hasPreviousPage: boolean; nextPage: number; previousPage: number; limit: number }) {
    return new GetPaginatedDto<T>(object.items, object.totalItems, object.currentPage, object.totalPages, object.hasNextPage, object.hasPreviousPage, object.nextPage, object.previousPage, object.limit);
  }
}
