"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateGeneralStatusDto = void 0;
class CreateGeneralStatusDto {
    name;
    constructor(name) {
        this.name = name;
    }
    static fromObject(obj) {
        return new CreateGeneralStatusDto(obj?.name);
    }
}
exports.CreateGeneralStatusDto = CreateGeneralStatusDto;
//# sourceMappingURL=create-general-status.dto.js.map