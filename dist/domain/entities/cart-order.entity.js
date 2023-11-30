"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartOrderEntity = void 0;
const cart_order_detail_entity_1 = require("@domain/entities/cart-order-detail.entity");
const user_entity_1 = require("@domain/entities/user.entity");
const payment_methods_entity_1 = require("@domain/entities/payment-methods.entity");
class CartOrderEntity {
    id;
    userId;
    paymentMethodId;
    quantity;
    total;
    subTotal;
    subTotalDiscount;
    subTotalTax;
    discount;
    tax;
    createdAt;
    updatedAt;
    user;
    paymentMethod;
    orderDetail;
    constructor(id, userId, paymentMethodId, quantity, total, subTotal, subTotalDiscount, subTotalTax, discount, tax, createdAt, updatedAt, user = null, paymentMethod = null, orderDetail = [] // Puede contener un array de OrderDetailEntity
    ) {
        this.id = id;
        this.userId = userId;
        this.paymentMethodId = paymentMethodId;
        this.quantity = quantity;
        this.total = total;
        this.subTotal = subTotal;
        this.subTotalDiscount = subTotalDiscount;
        this.subTotalTax = subTotalTax;
        this.discount = discount;
        this.tax = tax;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.user = user;
        this.paymentMethod = paymentMethod;
        this.orderDetail = orderDetail;
    }
    static fromObject(object) {
        return new CartOrderEntity(object.id, object.userId, object.paymentMethodId, object.quantity, object.total, object.subTotal, object.subTotalDiscount, object.subTotalTax, object.discount, object.tax, object.createdAt, object.updatedAt, object.user ? user_entity_1.UserEntity.fromObject(object.user) : null, object.paymentMethod
            ? payment_methods_entity_1.PaymentMethodsEntity.fromObject(object.paymentMethod)
            : null, object.orderDetail
            ? object.orderDetail.map((detail) => cart_order_detail_entity_1.CartOrderDetailEntity.fromObject(detail))
            : []);
    }
}
exports.CartOrderEntity = CartOrderEntity;
//# sourceMappingURL=cart-order.entity.js.map