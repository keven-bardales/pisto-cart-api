"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartStatusEntity = void 0;
const cart_entity_1 = require("@domain/entities/cart.entity");
class CartStatusEntity {
    id;
    name;
    createdAt;
    updatedAt;
    carts;
    constructor(id, name, createdAt, updatedAt, carts = [] // Puede contener un array de CartEntity
    ) {
        this.id = id;
        this.name = name;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.carts = carts;
    }
    static fromObject(object) {
        return new CartStatusEntity(object.id, object.name, object.createdAt, object.updatedAt, object.carts
            ? object.carts.map((cart) => cart_entity_1.CartEntity.fromObject(cart))
            : []);
    }
}
exports.CartStatusEntity = CartStatusEntity;
//# sourceMappingURL=cart-status.entity.js.map