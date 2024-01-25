"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModuleEntity = void 0;
class ModuleEntity {
    id;
    name;
    description;
    createdAt;
    updatedAt;
    constructor(id, name, description, createdAt, updatedAt, permissions) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
    static fromObject(object) {
        return new ModuleEntity(object?.id, object?.name, object?.description, object?.createdAt, object?.updatedAt, object?.permissions ?? null);
    }
}
exports.ModuleEntity = ModuleEntity;
//# sourceMappingURL=module.entity.js.map