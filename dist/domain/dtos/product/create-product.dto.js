"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductDto = void 0;
const product_status_constant_1 = require("@src/domain/constants/product-status/product-status.constant");
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
    generalStatusId;
    constructor(code, name, description, price, cost, stock, productCategoryId, productStatusId, imageUrl, generalStatusId) {
        this.code = code;
        this.name = name;
        this.description = description;
        this.price = price;
        this.cost = cost;
        this.stock = stock;
        this.productCategoryId = productCategoryId;
        this.productStatusId = productStatusId;
        this.imageUrl = imageUrl;
        this.generalStatusId = generalStatusId;
    }
    static fromObject(obj) {
        return new CreateProductDto(obj?.code, obj?.name, obj?.description, obj?.price, obj?.cost, obj?.stock, obj?.productCategoryId, obj?.productStatusId, obj?.imageUrl, product_status_constant_1.generalStatusConstant.ACTIVE.id);
    }
}
exports.CreateProductDto = CreateProductDto;
//# sourceMappingURL=create-product.dto.js.map