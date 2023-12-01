"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserRolDto = void 0;
class CreateUserRolDto {
    name;
    constructor(name) {
        this.name = name;
    }
    static fromObject(object) {
        return new CreateUserRolDto(object?.name);
    }
}
exports.CreateUserRolDto = CreateUserRolDto;
//# sourceMappingURL=create-user-rol.dto.js.map