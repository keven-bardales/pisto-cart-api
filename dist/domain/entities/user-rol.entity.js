"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRolEntity = void 0;
class UserRolEntity {
    id;
    name;
    users;
    constructor(id, name, users) {
        this.id = id;
        this.name = name;
        this.users = users;
    }
    static fromObject(object) {
        return new UserRolEntity(object.id, object.name, object?.users);
    }
}
exports.UserRolEntity = UserRolEntity;
//# sourceMappingURL=user-rol.entity.js.map