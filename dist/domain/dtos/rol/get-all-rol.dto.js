"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllUserRolDto = void 0;
class GetAllUserRolDto {
    id;
    name;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    static fromObject(object) {
        return new GetAllUserRolDto(object?.id, object?.name);
    }
}
exports.GetAllUserRolDto = GetAllUserRolDto;
//# sourceMappingURL=get-all-rol.dto.js.map