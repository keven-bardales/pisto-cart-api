import { prisma } from "@src/data";
import { UserRolDataSource } from "@src/domain/datasources/user-rol.datasource";
import { CreateUserRolDto } from "@src/domain/dtos/user-rol/create-user-rol.dto";
import { GetAllUserRolDto } from "@src/domain/dtos/user-rol/get-all-rol.dto";

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
}

export const userRolDataSource = new UserRolDataSourceImpl();
