"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartDetailEntity = void 0;
const product_entity_1 = require("@domain/entities/product.entity");
const cart_entity_1 = require("@domain/entities/cart.entity");
const color_discount_entity_1 = require("@domain/entities/color-discount.entity");
const tax_rate_entity_1 = require("@domain/entities/tax-rate.entity");
class CartDetailEntity {
    id;
    quantity;
    colorDiscountId;
    productId;
    taxRateId;
    cartId;
    createdAt;
    updatedAt;
    product;
    colorDiscount;
    cart;
    taxRate;
    constructor(id, quantity, colorDiscountId, productId, taxRateId, cartId, createdAt, updatedAt, product = null, colorDiscount = null, cart = null, taxRate = null) {
        this.id = id;
        this.quantity = quantity;
        this.colorDiscountId = colorDiscountId;
        this.productId = productId;
        this.taxRateId = taxRateId;
        this.cartId = cartId;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.product = product;
        this.colorDiscount = colorDiscount;
        this.cart = cart;
        this.taxRate = taxRate;
    }
    static fromObject(object) {
        return new CartDetailEntity(object.id, object.quantity, object.colorDiscountId, object.productId, object.taxRateId, object.cartId, object.createdAt, object.updatedAt, object.product ? product_entity_1.ProductEntity.fromObject(object.product) : null, object.colorDiscount
            ? color_discount_entity_1.ColorDiscountEntity.fromObject(object.colorDiscount)
            : null, object.cart ? cart_entity_1.CartEntity.fromObject(object.cart) : null, object.taxRate ? tax_rate_entity_1.TaxRateEntity.fromObject(object.taxRate) : null);
    }
}
exports.CartDetailEntity = CartDetailEntity;
//# sourceMappingURL=cart-detail.entity.js.map