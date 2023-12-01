import { CreateUserRolDto } from "@src/domain/dtos/user-rol/create-user-rol.dto";
import { GetAllUserRolDto } from "@src/domain/dtos/user-rol/get-all-rol.dto";
import { UserRolRepository } from "@src/domain/repositories/user-role.repository";

export type ICreateUserRolUseCase = {
  execute(dto: CreateUserRolDto): Promise<GetAllUserRolDto>;
};

export class CreateUserRolUseCase implements ICreateUserRolUseCase {
  constructor(private readonly userRolRepository: UserRolRepository) {}

  async execute(dto: CreateUserRolDto): Promise<GetAllUserRolDto> {
    const rol = await this.userRolRepository.create(dto);

    return rol;
  }
}
