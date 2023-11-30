"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerEntity = void 0;
const user_entity_1 = require("@domain/entities/user.entity");
class CustomerEntity {
    id;
    firstName;
    lastName;
    fullName;
    email;
    imageUrl;
    userId;
    createdAt;
    updatedAt;
    user;
    constructor(id, firstName, lastName, fullName, email, imageUrl, userId, createdAt, updatedAt, user) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = fullName;
        this.email = email;
        this.imageUrl = imageUrl;
        this.userId = userId;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.user = user;
    }
    static fromObject(object) {
        return new CustomerEntity(object.id, object.firstName, object.lastName, object.fullName, object.email, object.imageUrl, object.userId, object.createdAt, object.updatedAt, user_entity_1.UserEntity.fromObject(object?.user));
    }
}
exports.CustomerEntity = CustomerEntity;
//# sourceMappingURL=customer.entity.js.map