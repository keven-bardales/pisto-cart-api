"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllUserRolDto = void 0;
class GetAllUserRolDto {
    id;
    name;
    permissions;
    constructor(id, name, permissions) {
        this.id = id;
        this.name = name;
        this.permissions = permissions;
    }
    static fromObject(object) {
        return new GetAllUserRolDto(object?.id, object?.name, object?.permissions);
    }
}
exports.GetAllUserRolDto = GetAllUserRolDto;
//# sourceMappingURL=get-all-rol.dto.js.map