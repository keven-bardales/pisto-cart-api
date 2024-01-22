"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginationDto = void 0;
const bad_request_exception_1 = require("@src/domain/exceptions/bad-request.exception");
class PaginationDto {
    page;
    limit;
    search;
    column;
    order;
    all;
    constructor(page, limit, search, column, order, all = false) {
        this.page = page;
        this.limit = limit;
        this.search = search;
        this.column = column;
        this.order = order;
        this.all = all;
    }
    static fromObject(payload = {
        page: 1,
        limit: 10,
        search: "",
        column: "",
        order: "",
        all: false,
    }) {
        if (payload?.all)
            return new PaginationDto(1, 0, "", "", "", true);
        payload.page = parseInt(payload.page);
        payload.limit = parseInt(payload.limit);
        if (payload?.page < 1)
            throw new bad_request_exception_1.BadRequestException("La pagina debe ser mayor a 0");
        if (payload?.limit < 1)
            throw new bad_request_exception_1.BadRequestException("El limite debe ser mayor a 0");
        if (isNaN(payload?.page))
            throw new bad_request_exception_1.BadRequestException("La pagina debe ser un numero");
        if (isNaN(payload?.limit))
            throw new bad_request_exception_1.BadRequestException("El limite debe ser un numero");
        return new PaginationDto(payload?.page, payload?.limit, payload?.search, payload?.column, payload?.order, payload?.all);
    }
    get forPrisma() {
        return {
            orderBy: {
                [this.column]: this.order,
            },
            skip: (this.page - 1) * this.limit,
            take: this.limit,
        };
    }
}
exports.PaginationDto = PaginationDto;
//# sourceMappingURL=pagination.dto.js.map