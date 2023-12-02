"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductDto = void 0;
class CreateProductDto {
    code;
    name;
    description;
    price;
    cost;
    stock;
    productCategoryId;
    productStatusId;
    imageUrl;
    constructor(code, name, description, price, cost, stock, productCategoryId, productStatusId, imageUrl) {
        this.code = code;
        this.name = name;
        this.description = description;
        this.price = price;
        this.cost = cost;
        this.stock = stock;
        this.productCategoryId = productCategoryId;
        this.productStatusId = productStatusId;
        this.imageUrl = imageUrl;
    }
    static fromObject(obj) {
        return new CreateProductDto(obj?.code, obj?.name, obj?.description, obj?.price, obj?.cost, obj?.stock, obj?.productCategoryId, obj?.productStatusId, obj?.imageUrl);
    }
}
exports.CreateProductDto = CreateProductDto;
//# sourceMappingURL=create-product.dto.js.map