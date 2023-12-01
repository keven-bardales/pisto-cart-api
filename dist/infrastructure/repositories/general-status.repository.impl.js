"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generalStatusRepository = exports.GeneralStatusRepositoryImpl = void 0;
const general_status_datasource_impl_1 = require("@infrastructure/datasource/general-status.datasource.impl");
class GeneralStatusRepositoryImpl {
    dataSource;
    constructor(dataSource) {
        this.dataSource = dataSource;
    }
    create(dto) {
        return this.dataSource.create(dto);
    }
    getAll() {
        return this.dataSource.getAll();
    }
}
exports.GeneralStatusRepositoryImpl = GeneralStatusRepositoryImpl;
exports.generalStatusRepository = new GeneralStatusRepositoryImpl(general_status_datasource_impl_1.generalStatusDataSource);
//# sourceMappingURL=general-status.repository.impl.js.map