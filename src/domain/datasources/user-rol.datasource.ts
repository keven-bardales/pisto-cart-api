import { GetAllUserRolDto } from "@src/domain/dtos/user-rol/get-all-rol.dto";
import { CreateUserRolDto } from "@domain/dtos/user-rol/create-user-rol.dto";

export abstract class UserRolDataSource {
  abstract getAll(): Promise<GetAllUserRolDto[]>;

  abstract create(dto: CreateUserRolDto): Promise<GetAllUserRolDto>;
}
