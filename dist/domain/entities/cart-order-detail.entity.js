"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartOrderDetailEntity = void 0;
const color_discount_entity_1 = require("@domain/entities/color-discount.entity");
const product_entity_1 = require("@domain/entities/product.entity");
const tax_rate_entity_1 = require("@domain/entities/tax-rate.entity");
const cart_order_entity_1 = require("@domain/entities/cart-order.entity");
class CartOrderDetailEntity {
    id;
    orderId;
    productId;
    quantity;
    price;
    total;
    discount;
    tax;
    discountPercentage;
    colorDiscountId;
    taxRateId;
    createdAt;
    updatedAt;
    product;
    order;
    colorDiscount;
    taxRate;
    constructor(id, orderId, productId, quantity, price, total, discount, tax, discountPercentage, colorDiscountId, taxRateId, createdAt, updatedAt, product = null, order = null, colorDiscount = null, taxRate = null) {
        this.id = id;
        this.orderId = orderId;
        this.productId = productId;
        this.quantity = quantity;
        this.price = price;
        this.total = total;
        this.discount = discount;
        this.tax = tax;
        this.discountPercentage = discountPercentage;
        this.colorDiscountId = colorDiscountId;
        this.taxRateId = taxRateId;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.product = product;
        this.order = order;
        this.colorDiscount = colorDiscount;
        this.taxRate = taxRate;
    }
    static fromObject(object) {
        return new CartOrderDetailEntity(object.id, object.orderId, object.productId, object.quantity, object.price, object.total, object.discount, object.tax, object.discountPerecentage, object.colorDiscountId, object.taxRateId, object.createdAt, object.updatedAt, object.product ? product_entity_1.ProductEntity.fromObject(object.product) : null, object.order ? cart_order_entity_1.CartOrderEntity.fromObject(object.order) : null, object.colorDiscount ? color_discount_entity_1.ColorDiscountEntity.fromObject(object.colorDiscount) : null, object.taxRate ? tax_rate_entity_1.TaxRateEntity.fromObject(object.taxRate) : null);
    }
}
exports.CartOrderDetailEntity = CartOrderDetailEntity;
//# sourceMappingURL=cart-order-detail.entity.js.map