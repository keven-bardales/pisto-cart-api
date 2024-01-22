"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolPermissionEntity = void 0;
const permission_entity_1 = require("./permission.entity");
const user_rol_entity_1 = require("./user-rol.entity");
class RolPermissionEntity {
    id;
    rolId;
    permissionId;
    createdAt;
    updatedAt;
    rol;
    permission;
    constructor(id, rolId, permissionId, createdAt, updatedAt, rol, permission) {
        this.id = id;
        this.rolId = rolId;
        this.permissionId = permissionId;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.rol = rol;
        this.permission = permission;
    }
    static fromObject(object) {
        return new RolPermissionEntity(object?.id, object?.rolId, object?.permissionId, object?.createdAt, object?.updatedAt, user_rol_entity_1.UserRolEntity.fromObject(object?.rol), permission_entity_1.PermissionEntity.fromObject(object?.permission));
    }
}
exports.RolPermissionEntity = RolPermissionEntity;
//# sourceMappingURL=rol-permission.entity.js.map