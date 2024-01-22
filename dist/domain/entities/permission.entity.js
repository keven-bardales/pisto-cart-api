"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionEntity = void 0;
const module_entity_1 = require("./module.entity");
const rol_permission_entity_1 = require("./rol-permission.entity");
class PermissionEntity {
    id;
    name;
    moduleId;
    createdAt;
    updatedAt;
    module;
    rolPermissions;
    constructor(id, name, moduleId, createdAt, updatedAt, module, rolPermissions) {
        this.id = id;
        this.name = name;
        this.moduleId = moduleId;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.module = module;
        this.rolPermissions = rolPermissions;
    }
    static fromObject(object) {
        return new PermissionEntity(object?.id, object?.name, object?.moduleId, object?.createdAt, object?.updatedAt, module_entity_1.ModuleEntity.fromObject(object?.module), object?.rolPermissions?.map((rolPermission) => rol_permission_entity_1.RolPermissionEntity.fromObject(rolPermission)));
    }
}
exports.PermissionEntity = PermissionEntity;
//# sourceMappingURL=permission.entity.js.map