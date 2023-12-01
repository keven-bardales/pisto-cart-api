"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generalStatusDataSource = exports.GeneralStatusDataSourceImpl = void 0;
const data_1 = require("@src/data");
const get_all_general_status_dto_1 = require("@src/domain/dtos/generalStatus/get-all-general-status.dto");
class GeneralStatusDataSourceImpl {
    async create(dto) {
        const generalStatus = await data_1.prisma.generalStatus.create({
            data: {
                name: dto.name,
            },
        });
        return get_all_general_status_dto_1.GetAllGeneralStatusDto.fromObject(generalStatus);
    }
    async getAll() {
        const generalStatuses = await data_1.prisma.generalStatus.findMany();
        return generalStatuses.map((generalStatus) => get_all_general_status_dto_1.GetAllGeneralStatusDto.fromObject(generalStatus));
    }
}
exports.GeneralStatusDataSourceImpl = GeneralStatusDataSourceImpl;
exports.generalStatusDataSource = new GeneralStatusDataSourceImpl();
//# sourceMappingURL=general-status.datasource.impl.js.map