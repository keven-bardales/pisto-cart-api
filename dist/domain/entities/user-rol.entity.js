"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRolEntity = void 0;
class UserRolEntity {
    id;
    name;
    users;
    rolPermissions;
    constructor(id, name, users, rolPermissions) {
        this.id = id;
        this.name = name;
        this.users = users;
        this.rolPermissions = rolPermissions;
    }
    static fromObject(object) {
        return new UserRolEntity(object?.id, object?.name, object?.users ?? null, object?.rolPermissions ?? null);
    }
}
exports.UserRolEntity = UserRolEntity;
//# sourceMappingURL=user-rol.entity.js.map