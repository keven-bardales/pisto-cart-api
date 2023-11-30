import { CreateUserDto } from "@src/domain/dtos/user/create-user.dto";
import { GetAllUserDto } from "@src/domain/dtos/user/get-all-user.dto";
import { UserRepository } from "@src/domain/repositories/user.repository";

export type ICreateUserUseCase = {
  execute(dto: CreateUserDto): Promise<GetAllUserDto>;
};

export class CreateUserUseCase implements ICreateUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(dto: CreateUserDto): Promise<GetAllUserDto> {
    const userCreated = await this.userRepository.create(dto);

    return userCreated;
  }
}
