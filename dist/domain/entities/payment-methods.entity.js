"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentMethodsEntity = void 0;
const cart_order_entity_1 = require("@domain/entities/cart-order.entity");
class PaymentMethodsEntity {
    id;
    name;
    createdAt;
    updatedAt;
    cartOrders;
    constructor(id, name, createdAt, updatedAt, cartOrders // Puede contener un array de CartOrderEntity
    ) {
        this.id = id;
        this.name = name;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.cartOrders = cartOrders;
    }
    static fromObject(object) {
        return new PaymentMethodsEntity(object.id, object.name, object.createdAt, object.updatedAt, object.cartOrders ? object.cartOrders.map((order) => cart_order_entity_1.CartOrderEntity.fromObject(order)) : null);
    }
}
exports.PaymentMethodsEntity = PaymentMethodsEntity;
//# sourceMappingURL=payment-methods.entity.js.map