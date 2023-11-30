import { GetAllUserDto } from "@src/domain/dtos/user/get-all-user.dto";
import { UserRepository } from "@src/domain/repositories/user.repository";

export type IGetAllUsersUseCase = {
  execute(): Promise<GetAllUserDto[]>;
};

export class GetAllUsersUseCase implements IGetAllUsersUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(): Promise<GetAllUserDto[]> {
    const users = await this.userRepository.getAll();

    return users;
  }
}
