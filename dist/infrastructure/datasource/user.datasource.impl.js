"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDataSourceImpl = void 0;
const index_1 = require("./../../data/index");
const user_entity_1 = require("./../../domain/entities/user.entity");
class UserDataSourceImpl {
    async getAll() {
        const users = await index_1.prisma.user.findMany({
            include: {
                rol: true,
                carts: true,
            },
        });
        return users.map((user) => user_entity_1.UserEntity.fromObject(user));
    }
}
exports.UserDataSourceImpl = UserDataSourceImpl;
//# sourceMappingURL=user.datasource.impl.js.map