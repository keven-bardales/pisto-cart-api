import { GetAllUserRolDto } from "@src/domain/dtos/user-rol/get-all-rol.dto";
import { UserRolRepository } from "@src/domain/repositories/user-role.repository";

export type IGetAllUserRolUseCase = {
  execute(): Promise<GetAllUserRolDto[]>;
};

export class GetAllUserRolUseCase implements IGetAllUserRolUseCase {
  constructor(private readonly userRolRepository: UserRolRepository) {}

  async execute(): Promise<GetAllUserRolDto[]> {
    const roles = await this.userRolRepository.getAll();

    return roles;
  }
}
