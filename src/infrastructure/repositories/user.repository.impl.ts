import { UserDataSource } from "@domain/datasources/user.datasource";
import { UserEntity } from "@domain/entities/user.entity";
import { UserRepository } from "@domain/repositories/user.repository";

export class UserRepositoryImpl implements UserRepository {
  constructor(private readonly dataSource: UserDataSource) {}

  getAll(): Promise<UserEntity[]> {
    return this.dataSource.getAll();
  }
}
