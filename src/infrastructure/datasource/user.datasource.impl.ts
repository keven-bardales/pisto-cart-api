import { prisma } from "@data/index";
import { UserDataSource } from "@domain/datasources/user.datasource";
import { UserEntity } from "@domain/entities/user.entity";
import { GetAllUserDto } from "@domain/dtos/user/get-all-user.dto";
import { CreateUserDto } from "@src/domain/dtos/user/create-user.dto";
import { UpdateUserDto } from "@src/domain/dtos/user/update-user.dto";

export class UserDataSourceImpl implements UserDataSource {
  async getAll(): Promise<GetAllUserDto[]> {
    const users = await prisma.user.findMany({
      include: {
        rol: true,
      },
    });

    return users.map((user) => GetAllUserDto.fromObject(user));
  }

  async getById(id: typeof UserEntity.prototype.id): Promise<GetAllUserDto> {
    const user = await prisma.user.findUnique({
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

    return GetAllUserDto.fromObject(user);
  }

  async create(user: CreateUserDto): Promise<GetAllUserDto> {
    const newUser = await prisma.user.create({
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

    return GetAllUserDto.fromObject(newUser);
  }

  async update(
    id: typeof UserEntity.prototype.id,
    user: UpdateUserDto
  ): Promise<GetAllUserDto> {
    const updatedUser = await prisma.user.update({
      where: {
        id,
      },
      data: {
        ...user.valuesToUpdate,
      },
    });

    return GetAllUserDto.fromObject(updatedUser);
  }

  async checkIfUserExistsByParams(params: {
    [key: string]: any;
  }): Promise<typeof UserEntity.prototype.id> {
    const foundUser = await prisma.user.findFirst({
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

export const userDataSource = new UserDataSourceImpl();
