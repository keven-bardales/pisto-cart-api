"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPaginatedDto = void 0;
class GetPaginatedDto {
    items;
    totalItems;
    currentPage;
    totalPages;
    hasNextPage;
    hasPreviousPage;
    nextPage;
    previousPage;
    limit;
    constructor(items, totalItems, currentPage, totalPages, hasNextPage, hasPreviousPage, nextPage, previousPage, limit) {
        this.items = items;
        this.totalItems = totalItems;
        this.currentPage = currentPage;
        this.totalPages = totalPages;
        this.hasNextPage = hasNextPage;
        this.hasPreviousPage = hasPreviousPage;
        this.nextPage = nextPage;
        this.previousPage = previousPage;
        this.limit = limit;
    }
    static fromObject(object) {
        const hasNextPage = object.currentPage < Math.ceil(object.totalItems / object.limit);
        const hasPreviousPage = object.currentPage > 1;
        const nextPage = object.currentPage + 1;
        const previousPage = object.currentPage - 1;
        const totalPages = Math.ceil(object.totalItems / object.limit);
        return new GetPaginatedDto(object.items, object.totalItems, object.currentPage, totalPages, hasNextPage, hasPreviousPage, nextPage, previousPage, object.limit);
    }
}
exports.GetPaginatedDto = GetPaginatedDto;
//# sourceMappingURL=get-paginated-dto.js.map