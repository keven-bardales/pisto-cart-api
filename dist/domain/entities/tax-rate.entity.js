"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaxRateEntity = void 0;
const cart_detail_entity_1 = require("@domain/entities/cart-detail.entity");
const cart_order_detail_entity_1 = require("@domain/entities/cart-order-detail.entity");
class TaxRateEntity {
    id;
    name;
    rate;
    createdAt;
    updatedAt;
    cartDetails;
    orderDetails;
    constructor(id, name, rate, createdAt, updatedAt, cartDetails, orderDetails) {
        this.id = id;
        this.name = name;
        this.rate = rate;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.cartDetails = cartDetails;
        this.orderDetails = orderDetails;
    }
    static fromObject(object) {
        return new TaxRateEntity(object.id, object.name, object.rate, object.createdAt, object.updatedAt, object.cartDetail ? object.cartDetails.map((detail) => cart_detail_entity_1.CartDetailEntity.fromObject(detail)) : null, object.orderDetails ? object.orderDetail.map((detail) => cart_order_detail_entity_1.CartOrderDetailEntity.fromObject(detail)) : null);
    }
}
exports.TaxRateEntity = TaxRateEntity;
//# sourceMappingURL=tax-rate.entity.js.map