"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProductDto = void 0;
class UpdateProductDto {
    name;
    code;
    description;
    price;
    stock;
    productCategoryId;
    productStatusId;
    imageUrl;
    constructor(name, code, description, price, stock, productCategoryId, productStatusId, imageUrl) {
        this.name = name;
        this.code = code;
        this.description = description;
        this.price = price;
        this.stock = stock;
        this.productCategoryId = productCategoryId;
        this.productStatusId = productStatusId;
        this.imageUrl = imageUrl;
    }
    static create(object) {
        return new UpdateProductDto(object?.name, object?.code, object?.description, object?.price, object?.stock, object?.productCategoryId, object?.productStatusId, object?.imageUrl);
    }
    getValues() {
        const keys = Object.keys(this);
        const object = {};
        for (const key of keys) {
            if (this[key])
                object[key] = this[key];
        }
        return object;
    }
}
exports.UpdateProductDto = UpdateProductDto;
//# sourceMappingURL=update-product.dto.js.map