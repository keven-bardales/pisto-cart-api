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
    getById(id) {
        return this.dataSource.getById(id);
    }
    create(user) {
        return this.dataSource.create(user);
    }
    update(id, user) {
        return this.dataSource.update(id, user);
    }
    checkIfUserExistsByParams(params) {
        return this.dataSource.checkIfUserExistsByParams(params);
    }
}
exports.UserRepositoryImpl = UserRepositoryImpl;
//# sourceMappingURL=user.repository.impl.js.map