"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginatedData = void 0;
class PaginatedData {
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
        return new PaginatedData(object.items, object.totalItems, object.currentPage, object.totalPages, object.hasNextPage, object.hasPreviousPage, object.nextPage, object.previousPage, object.limit);
    }
}
exports.PaginatedData = PaginatedData;
//# sourceMappingURL=paginated.response.js.map