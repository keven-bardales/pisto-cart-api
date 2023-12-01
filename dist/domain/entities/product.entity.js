"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductEntity = void 0;
const product_state_entity_1 = require("@domain/entities/product-state.entity");
const product_category_entity_1 = require("@domain/entities/product-category.entity");
const cart_order_detail_entity_1 = require("@domain/entities/cart-order-detail.entity");
const cart_detail_entity_1 = require("@domain/entities/cart-detail.entity");
class ProductEntity {
    id;
    code;
    name;
    description;
    price;
    cost;
    stock;
    imageUrl;
    productCategoryId;
    productStateId;
    createdAt;
    updatedAt;
    productState;
    productCategory;
    orderDetails;
    cartDetails;
    constructor(id, code, name, description, price, cost, stock, imageUrl, productCategoryId, productStateId, createdAt, updatedAt, productState, productCategory, orderDetails, cartDetails) {
        this.id = id;
        this.code = code;
        this.name = name;
        this.description = description;
        this.price = price;
        this.cost = cost;
        this.stock = stock;
        this.imageUrl = imageUrl;
        this.productCategoryId = productCategoryId;
        this.productStateId = productStateId;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.productState = productState;
        this.productCategory = productCategory;
        this.orderDetails = orderDetails;
        this.cartDetails = cartDetails;
    }
    static fromObject(object) {
        return new ProductEntity(object.id, object.code, object.name, object.description, object.price, object.cost, object.stock, object.imageUrl, object.productCategoryId, object.productStateId, object.createdAt, object.updatedAt, product_state_entity_1.ProductStateEntity.fromObject(object?.productState), product_category_entity_1.ProductCategoryEntity.fromObject(object?.productCategory), object?.orderDetails.map((orderDetail) => cart_order_detail_entity_1.CartOrderDetailEntity.fromObject(orderDetail)), object?.cartDetails.map((cartDetail) => cart_detail_entity_1.CartDetailEntity.fromObject(cartDetail)));
    }
}
exports.ProductEntity = ProductEntity;
//# sourceMappingURL=product.entity.js.map