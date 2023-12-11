import { prisma } from "@src/data";
import { UserRolDataSource } from "@src/domain/datasources/user-rol.datasource";
import { CreateUserRolDto } from "@src/domain/dtos/user-rol/create-user-rol.dto";
import { GetAllUserRolDto } from "@src/domain/dtos/user-rol/get-all-rol.dto";
import { UserRolEntity } from "@src/domain/entities/user-rol.entity";

export class UserRolDataSourceImpl implements UserRolDataSource {
  async getAll(): Promise<GetAllUserRolDto[]> {
    const userRoles = await prisma.userRol.findMany();

    return userRoles.map((userRol) => GetAllUserRolDto.fromObject(userRol));
  }

  async create(dto: CreateUserRolDto): Promise<GetAllUserRolDto> {
    const userRol = await prisma.userRol.create({
      data: {
        name: dto.name,
      },
    });

    return GetAllUserRolDto.fromObject(userRol);
  }

  async getById(id: typeof UserRolEntity.prototype.id): Promise<GetAllUserRolDto> {
    const rol = await prisma.userRol.findUnique({
      where: {
        id,
      },
    });

    if (!rol) {
      return null;
    }

    return GetAllUserRolDto.fromObject(rol);
  }
}

export const userRolDataSource = new UserRolDataSourceImpl();
