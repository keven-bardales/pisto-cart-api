import { GetAllUserRolDto } from "@src/domain/dtos/user-rol/get-all-rol.dto";
import { CreateUserRolDto } from "@domain/dtos/user-rol/create-user-rol.dto";
import { UserRolEntity } from "../entities/user-rol.entity";

export abstract class UserRolRepository {
  abstract getAll(): Promise<GetAllUserRolDto[]>;

  abstract create(dto: CreateUserRolDto): Promise<GetAllUserRolDto>;

  abstract getById(id: typeof UserRolEntity.prototype.id): Promise<GetAllUserRolDto>;
}
