"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductStatusDto = void 0;
class CreateProductStatusDto {
    name;
    constructor(name) {
        this.name = name;
    }
    static fromObject(obj) {
        return new CreateProductStatusDto(obj?.name);
    }
}
exports.CreateProductStatusDto = CreateProductStatusDto;
//# sourceMappingURL=create-product-status.dto.js.map