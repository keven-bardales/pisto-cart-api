"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRepository = void 0;
const user_datasource_impl_1 = require("@infrastructure/datasource/user.datasource.impl");
class UserRepositoryImpl {
    dataSource;
    instance;
    constructor(dataSource) {
        this.dataSource = dataSource;
    }
    getInstance(dataSource) {
        if (this.instance)
            return this.instance;
        return new UserRepositoryImpl(dataSource);
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
exports.userRepository = new UserRepositoryImpl(user_datasource_impl_1.userDataSource);
//# sourceMappingURL=user.repository.impl.js.map