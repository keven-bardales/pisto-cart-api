"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRolRepository = exports.UserRolRepositoryImpl = void 0;
const user_rol_datasource_impl_1 = require("@infrastructure/datasource/user-rol.datasource.impl");
class UserRolRepositoryImpl {
    dataSource;
    constructor(dataSource) {
        this.dataSource = dataSource;
    }
    getAll() {
        return this.dataSource.getAll();
    }
    create(dto) {
        return this.dataSource.create(dto);
    }
}
exports.UserRolRepositoryImpl = UserRolRepositoryImpl;
exports.userRolRepository = new UserRolRepositoryImpl(user_rol_datasource_impl_1.userRolDataSource);
//# sourceMappingURL=user-rol.repository.impl.js.map