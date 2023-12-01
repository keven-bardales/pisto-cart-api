"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllProductStatusDto = void 0;
class GetAllProductStatusDto {
    id;
    name;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    static fromObject(obj) {
        return new GetAllProductStatusDto(obj?.id, obj?.name);
    }
}
exports.GetAllProductStatusDto = GetAllProductStatusDto;
//# sourceMappingURL=get-all-product-status.dto.js.map