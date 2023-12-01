import { UserRolDataSource } from "@src/domain/datasources/user-rol.datasource";
import { CreateUserRolDto } from "@src/domain/dtos/user-rol/create-user-rol.dto";
import { GetAllUserRolDto } from "@src/domain/dtos/user-rol/get-all-rol.dto";
import { UserRolRepository } from "@src/domain/repositories/user-role.repository";
import { userRolDataSource } from "@infrastructure/datasource/user-rol.datasource.impl";

export class UserRolRepositoryImpl implements UserRolRepository {
  constructor(private readonly dataSource: UserRolDataSource) {}

  getAll(): Promise<GetAllUserRolDto[]> {
    return this.dataSource.getAll();
  }

  create(dto: CreateUserRolDto): Promise<GetAllUserRolDto> {
    return this.dataSource.create(dto);
  }
}

export const userRolRepository = new UserRolRepositoryImpl(userRolDataSource);
