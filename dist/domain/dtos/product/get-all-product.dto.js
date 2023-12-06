"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllProductDto = void 0;
class GetAllProductDto {
    id;
    code;
    name;
    description;
    price;
    stock;
    productCategoryId;
    productStatusId;
    updatedAt;
    createdAt;
    imageUrl;
    productStatus;
    productCategory;
    constructor(id, code, name, description, price, stock, productCategoryId, productStatusId, updatedAt, createdAt, imageUrl, productStatus, productCategory) {
        this.id = id;
        this.code = code;
        this.name = name;
        this.description = description;
        this.price = price;
        this.stock = stock;
        this.productCategoryId = productCategoryId;
        this.productStatusId = productStatusId;
        this.updatedAt = updatedAt;
        this.createdAt = createdAt;
        this.imageUrl = imageUrl;
        this.productStatus = productStatus;
        this.productCategory = productCategory;
    }
    static create(object) {
        return new GetAllProductDto(object?.id, object?.code, object?.name, object?.description, object?.price, object?.stock, object?.productCategoryId, object?.productStatusId, object?.updatedAt, object?.createdAt, object?.imageUrl, object?.productStatus, object?.productCategory);
    }
}
exports.GetAllProductDto = GetAllProductDto;
//# sourceMappingURL=get-all-product.dto.js.map