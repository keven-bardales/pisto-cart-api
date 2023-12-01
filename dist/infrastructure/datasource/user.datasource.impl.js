"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userDataSource = exports.UserDataSourceImpl = void 0;
const index_1 = require("@data/index");
const get_all_user_dto_1 = require("@domain/dtos/user/get-all-user.dto");
class UserDataSourceImpl {
    async getAll() {
        const users = await index_1.prisma.user.findMany({
            include: {
                rol: true,
            },
        });
        return users.map((user) => get_all_user_dto_1.GetAllUserDto.fromObject(user));
    }
    async getById(id) {
        const user = await index_1.prisma.user.findUnique({
            where: {
                id,
            },
            include: {
                rol: true,
            },
        });
        if (!user) {
            //  TODO: Implementar un error personalizado
            throw new Error(`Usuario con id ${id} no encontrado`);
        }
        return get_all_user_dto_1.GetAllUserDto.fromObject(user);
    }
    async create(user) {
        const newUser = await index_1.prisma.user.create({
            data: {
                email: user?.email,
                firstName: user?.firstName,
                fullName: user?.fullName,
                lastName: user?.lastName,
                password: user?.password,
                rolId: user?.rolId,
                googleId: user?.googleId,
                imageUrl: user?.imageUrl,
                generalStatusId: user?.generalStatusId,
            },
        });
        return get_all_user_dto_1.GetAllUserDto.fromObject(newUser);
    }
    async update(id, user) {
        const updatedUser = await index_1.prisma.user.update({
            where: {
                id,
            },
            data: {
                ...user.valuesToUpdate,
            },
        });
        return get_all_user_dto_1.GetAllUserDto.fromObject(updatedUser);
    }
    async checkIfUserExistsByParams(params) {
        const foundUser = await index_1.prisma.user.findFirst({
            where: {
                ...params,
            },
        });
        if (!foundUser) {
            return null;
        }
        return foundUser.id;
    }
}
exports.UserDataSourceImpl = UserDataSourceImpl;
exports.userDataSource = new UserDataSourceImpl();
//# sourceMappingURL=user.datasource.impl.js.map