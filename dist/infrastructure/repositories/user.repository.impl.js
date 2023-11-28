"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepositoryImpl = void 0;
class UserRepositoryImpl {
    dataSource;
    constructor(dataSource) {
        this.dataSource = dataSource;
    }
    getAll() {
        return this.dataSource.getAll();
    }
}
exports.UserRepositoryImpl = UserRepositoryImpl;
//# sourceMappingURL=user.repository.impl.js.map