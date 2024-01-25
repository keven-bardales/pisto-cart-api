"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneralStatusEntity = void 0;
const product_entity_1 = require("./product.entity");
const user_entity_1 = require("./user.entity");
class GeneralStatusEntity {
    id;
    name;
    createdAt;
    updatedAt;
    users;
    products;
    constructor(id, name, createdAt, updatedAt, users, products) {
        this.id = id;
        this.name = name;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.users = users;
        this.products = products;
    }
    static fromObject(object) {
        return new GeneralStatusEntity(object.id, object.name, object.createdAt, object.updatedAt, object?.users.map((user) => user_entity_1.UserEntity.fromObject(user)), object?.products.map((product) => product_entity_1.ProductEntity.fromObject(product)));
    }
}
exports.GeneralStatusEntity = GeneralStatusEntity;
//# sourceMappingURL=general-status.entity.js.map