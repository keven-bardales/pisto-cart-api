"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductStatusEntity = void 0;
const product_entity_1 = require("@domain/entities/product.entity");
class ProductStatusEntity {
    id;
    name;
    createdAt;
    updatedAt;
    products;
    constructor(id, name, createdAt, updatedAt, products) {
        this.id = id;
        this.name = name;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.products = products;
    }
    static fromObject(object) {
        return new ProductStatusEntity(object.id, object.name, object.createdAt, object.updatedAt, object?.products ? object.products.map((product) => product_entity_1.ProductEntity.fromObject(product)) : []);
    }
}
exports.ProductStatusEntity = ProductStatusEntity;
//# sourceMappingURL=product-status.entity.js.map