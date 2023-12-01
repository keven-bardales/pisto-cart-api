"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRolRepositoryImpl = void 0;
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
//# sourceMappingURL=user-role.repository.impl.js.map