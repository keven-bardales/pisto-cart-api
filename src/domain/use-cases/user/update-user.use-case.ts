import { CreateUserDto } from "@src/domain/dtos/user/create-user.dto";
import { GetAllUserDto } from "@src/domain/dtos/user/get-all-user.dto";
import { UpdateUserDto } from "@src/domain/dtos/user/update-user.dto";
import { UserEntity } from "@src/domain/entities/user.entity";
import { UserRepository } from "@src/domain/repositories/user.repository";

export type IUpdateUserUseCase = {
  execute(
    id: typeof UserEntity.prototype.id,
    dto: UpdateUserDto
  ): Promise<GetAllUserDto>;
};

export class UpdateUserUseCase implements IUpdateUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(
    id: typeof UserEntity.prototype.id,
    dto: UpdateUserDto
  ): Promise<GetAllUserDto> {
    const userCreated = await this.userRepository.update(id, dto);

    return userCreated;
  }
}
