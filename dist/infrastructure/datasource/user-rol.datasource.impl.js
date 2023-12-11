"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRolDataSource = exports.UserRolDataSourceImpl = void 0;
const data_1 = require("@src/data");
const get_all_rol_dto_1 = require("@src/domain/dtos/user-rol/get-all-rol.dto");
class UserRolDataSourceImpl {
    async getAll() {
        const userRoles = await data_1.prisma.userRol.findMany();
        return userRoles.map((userRol) => get_all_rol_dto_1.GetAllUserRolDto.fromObject(userRol));
    }
    async create(dto) {
        const userRol = await data_1.prisma.userRol.create({
            data: {
                name: dto.name,
            },
        });
        return get_all_rol_dto_1.GetAllUserRolDto.fromObject(userRol);
    }
    async getById(id) {
        const rol = await data_1.prisma.userRol.findUnique({
            where: {
                id,
            },
        });
        if (!rol) {
            return null;
        }
        return get_all_rol_dto_1.GetAllUserRolDto.fromObject(rol);
    }
}
exports.UserRolDataSourceImpl = UserRolDataSourceImpl;
exports.userRolDataSource = new UserRolDataSourceImpl();
//# sourceMappingURL=user-rol.datasource.impl.js.map