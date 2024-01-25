"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEntity = void 0;
const user_rol_entity_1 = require("@domain/entities/user-rol.entity");
const general_status_entity_1 = require("./general-status.entity");
const cart_entity_1 = require("./cart.entity");
const cart_order_entity_1 = require("./cart-order.entity");
class UserEntity {
    id;
    firstName;
    lastName;
    fullName;
    email;
    imageUrl;
    rolId;
    generalStatusId;
    createdAt;
    updatedAt;
    rol;
    generalStatus;
    carts;
    cartOrders;
    constructor(id, firstName, lastName, fullName, email, imageUrl, rolId, generalStatusId, createdAt, updatedAt, rol, generalStatus, carts, cartOrders) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = fullName;
        this.email = email;
        this.imageUrl = imageUrl;
        this.rolId = rolId;
        this.generalStatusId = generalStatusId;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.rol = rol;
        this.generalStatus = generalStatus;
        this.carts = carts;
        this.cartOrders = cartOrders;
    }
    static fromObject(object) {
        return new UserEntity(object?.id, object?.firstName, object?.lastName, object?.fullName, object?.email, object?.imageUrl, object?.rolId, object?.generalStatusId, object?.createdAt, object?.updatedAt, user_rol_entity_1.UserRolEntity.fromObject(object?.rol), general_status_entity_1.GeneralStatusEntity.fromObject(object?.generalStatus), object?.carts?.map((cart) => cart_entity_1.CartEntity.fromObject(cart)), object?.cartOrders?.map((cartOrder) => cart_order_entity_1.CartOrderEntity.fromObject(cartOrder)));
    }
}
exports.UserEntity = UserEntity;
//# sourceMappingURL=user.entity.js.map