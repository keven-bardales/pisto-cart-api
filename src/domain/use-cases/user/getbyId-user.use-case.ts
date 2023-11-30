import { GetAllUserDto } from "@src/domain/dtos/user/get-all-user.dto";
import { UserEntity } from "@src/domain/entities/user.entity";
import { UserRepository } from "@src/domain/repositories/user.repository";

export type IGetByIdUserUseCase = {
  execute(id: typeof UserEntity.prototype.id): Promise<GetAllUserDto>;
};

export class GetByIdUserUseCase implements IGetByIdUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(id: typeof UserEntity.prototype.id): Promise<GetAllUserDto> {
    const userFound = await this.userRepository.getById(id);

    return userFound;
  }
}
