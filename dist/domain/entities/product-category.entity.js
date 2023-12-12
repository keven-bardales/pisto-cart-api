"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCategoryEntity = void 0;
const product_entity_1 = require("@domain/entities/product.entity");
class ProductCategoryEntity {
    id;
    categoryCode;
    name;
    categoryLevel;
    parentCategoryId;
    createdAt;
    updatedAt;
    description;
    imageUrl;
    products;
    parentCategory;
    constructor(id, categoryCode, name, categoryLevel, parentCategoryId, createdAt, updatedAt, description, imageUrl, products = [], parentCategory) {
        this.id = id;
        this.categoryCode = categoryCode;
        this.name = name;
        this.categoryLevel = categoryLevel;
        this.parentCategoryId = parentCategoryId;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.description = description;
        this.imageUrl = imageUrl;
        this.products = products;
        this.parentCategory = parentCategory;
    }
    static fromObject(object) {
        return new ProductCategoryEntity(object.id, object.categoryCode, object.name, object.categoryLevel, object.parentCategoryId || null, object.createdAt, object.updatedAt, object.description, object.imageUrl, object.products ? object.products.map((product) => product_entity_1.ProductEntity.fromObject(product)) : [], object.parentCategory ? ProductCategoryEntity.fromObject(object.parentCategory) : null);
    }
}
exports.ProductCategoryEntity = ProductCategoryEntity;
//# sourceMappingURL=product-category.entity.js.map