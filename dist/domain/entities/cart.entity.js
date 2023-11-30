"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartEntity = void 0;
const user_entity_1 = require("@domain/entities/user.entity");
const cart_status_entity_1 = require("@domain/entities/cart-status.entity");
const cart_detail_entity_1 = require("@domain/entities/cart-detail.entity");
class CartEntity {
    id;
    total;
    subTotal;
    subTotalDiscount;
    subTotalTax;
    discount;
    tax;
    userId;
    cartStatusId;
    createdAt;
    updatedAt;
    user;
    cartStatus;
    cartDetail;
    constructor(id, total, subTotal, subTotalDiscount, subTotalTax, discount, tax, userId, cartStatusId, createdAt, updatedAt, user = null, cartStatus = null, cartDetail = []) {
        this.id = id;
        this.total = total;
        this.subTotal = subTotal;
        this.subTotalDiscount = subTotalDiscount;
        this.subTotalTax = subTotalTax;
        this.discount = discount;
        this.tax = tax;
        this.userId = userId;
        this.cartStatusId = cartStatusId;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.user = user;
        this.cartStatus = cartStatus;
        this.cartDetail = cartDetail;
    }
    static fromObject(object) {
        return new CartEntity(object.id, object.total, object.subTotal, object.subTotalDiscount, object.subTotalTax, object.discount, object.tax, object.userId, object.cartStatusId, object.createdAt, object.updatedAt, object.user ? user_entity_1.UserEntity.fromObject(object.user) : null, object.cartStatus ? cart_status_entity_1.CartStatusEntity.fromObject(object.cartStatus) : null, object.cartDetail
            ? object.cartDetail.map((detail) => cart_detail_entity_1.CartDetailEntity.fromObject(detail))
            : []);
    }
}
exports.CartEntity = CartEntity;
//# sourceMappingURL=cart.entity.js.map