import { prisma } from "@data/index";
import { UserDataSource } from "@domain/datasources/user.datasource";
import { UserEntity } from "@domain/entities/user.entity";

export class UserDataSourceImpl implements UserDataSource {
  async getAll(): Promise<UserEntity[]> {
    const users = await prisma.user.findMany({
      include: {
        rol: true,
        carts: true,
      },
    });
    return users.map((user) => UserEntity.fromObject(user));
  }
}
