"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllGeneralStatusDto = void 0;
class GetAllGeneralStatusDto {
    id;
    name;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    static fromObject(obj) {
        return new GetAllGeneralStatusDto(obj?.id, obj?.name);
    }
}
exports.GetAllGeneralStatusDto = GetAllGeneralStatusDto;
//# sourceMappingURL=get-all-general-status.dto.js.map