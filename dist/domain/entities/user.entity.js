"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEntity = void 0;
const user_rol_entity_1 = require("@domain/entities/user-rol.entity");
class UserEntity {
    id;
    googleId;
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
    customers;
    constructor(id, googleId, firstName, lastName, fullName, email, imageUrl, rolId, generalStatusId, createdAt, updatedAt, rol, generalStatus, carts, cartOrders, customers) {
        this.id = id;
        this.googleId = googleId;
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
        this.customers = customers;
    }
    static fromObject(object) {
        return new UserEntity(object.id, object.googleId, object.firstName, object.lastName, object.fullName, object.email, object.imageUrl, object.rolId, object.generalStatusId, object.createdAt, object.updatedAt, user_rol_entity_1.UserRolEntity.fromObject(object?.rol), object?.generalStatus, object?.carts, object?.cartOrders, object?.customers);
    }
}
exports.UserEntity = UserEntity;
class Customer {
}
class GeneralStatus {
}
class Cart {
}
class CartOrder {
}
//# sourceMappingURL=user.entity.js.map