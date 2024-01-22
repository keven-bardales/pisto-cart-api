"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorDiscountEntity = void 0;
const cart_order_detail_entity_1 = require("@domain/entities/cart-order-detail.entity");
const cart_detail_entity_1 = require("@domain/entities/cart-detail.entity");
class ColorDiscountEntity {
    id;
    name;
    discountPercentage;
    createdAt;
    updatedAt;
    orderDetails;
    cartDetails;
    constructor(id, name, discountPercentage, createdAt, updatedAt, orderDetails, cartDetails) {
        this.id = id;
        this.name = name;
        this.discountPercentage = discountPercentage;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.orderDetails = orderDetails;
        this.cartDetails = cartDetails;
    }
    static fromObject(object) {
        return new ColorDiscountEntity(object.id, object.name, object.discountPerecentage, object.createdAt, object.updatedAt, object.orderDetail ? object.orderDetails.map((detail) => cart_order_detail_entity_1.CartOrderDetailEntity.fromObject(detail)) : null, object.cartDetail ? object.cartDetails.map((detail) => cart_detail_entity_1.CartDetailEntity.fromObject(detail)) : null);
    }
}
exports.ColorDiscountEntity = ColorDiscountEntity;
//# sourceMappingURL=color-discount.entity.js.map