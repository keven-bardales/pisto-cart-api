"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEntity = void 0;
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
    customers;
    rol;
    generalStatus;
    carts;
    cartOrders;
    constructor(id, googleId, firstName, lastName, fullName, email, imageUrl, rolId, generalStatusId, createdAt, updatedAt, customers, rol, generalStatus, carts, cartOrders) {
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
        this.customers = customers;
        this.rol = rol;
        this.generalStatus = generalStatus;
        this.carts = carts;
        this.cartOrders = cartOrders;
    }
    static fromObject(object) {
        return new UserEntity(object.id, object.googleId, object.firstName, object.lastName, object.fullName, object.email, object.imageUrl, object.rolId, object.generalStatusId, object.createdAt, object.updatedAt, object.customers, object.rol, object.generalStatus, object.carts, object.cartOrders);
    }
}
exports.UserEntity = UserEntity;
class Customer {
}
class UserRol {
}
class GeneralStatus {
}
class Cart {
}
class CartOrder {
}
//# sourceMappingURL=user.entity.js.map