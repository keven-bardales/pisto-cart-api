"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneralStatusEntity = void 0;
class GeneralStatusEntity {
    id;
    name;
    createdAt;
    updatedAt;
    users;
    constructor(id, name, createdAt, updatedAt, users) {
        this.id = id;
        this.name = name;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.users = users;
    }
}
exports.GeneralStatusEntity = GeneralStatusEntity;
//# sourceMappingURL=general-status.entity.js.map