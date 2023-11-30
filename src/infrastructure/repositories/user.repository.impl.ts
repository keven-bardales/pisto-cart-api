import { UserDataSource } from "@domain/datasources/user.datasource";
import { UserRepository } from "@domain/repositories/user.repository";
import { GetAllUserDto } from "@domain/dtos/user/get-all-user.dto";
import { CreateUserDto } from "@src/domain/dtos/user/create-user.dto";
import { UpdateUserDto } from "@src/domain/dtos/user/update-user.dto";
import { UserEntity } from "@src/domain/entities/user.entity";

export class UserRepositoryImpl implements UserRepository {
  constructor(private readonly dataSource: UserDataSource) {}

  getAll(): Promise<GetAllUserDto[]> {
    return this.dataSource.getAll();
  }

  getById(id: typeof UserEntity.prototype.id): Promise<GetAllUserDto> {
    return this.dataSource.getById(id);
  }

  create(user: CreateUserDto): Promise<GetAllUserDto> {
    return this.dataSource.create(user);
  }

  update(
    id: typeof UserEntity.prototype.id,
    user: UpdateUserDto
  ): Promise<GetAllUserDto> {
    return this.dataSource.update(id, user);
  }

  checkIfUserExistsByParams(params: {
    [key: string]: any;
  }): Promise<typeof UserEntity.prototype.id> {
    return this.dataSource.checkIfUserExistsByParams(params);
  }
}
