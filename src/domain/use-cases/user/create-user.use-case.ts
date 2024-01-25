import { bcryptAdapter } from "@src/config/bcrypt.adapter";
import { CreateUserDto } from "@src/domain/dtos/user/create-user.dto";
import { GetAllUserDto } from "@src/domain/dtos/user/get-all-user.dto";
import { UserRolRepository } from "@src/domain/repositories/user-role.repository";
import { UserRepository } from "@src/domain/repositories/user.repository";

export type ICreateUserUseCase = {
  execute(dto: CreateUserDto): Promise<GetAllUserDto>;
};

export class CreateUserUseCase implements ICreateUserUseCase {
  constructor(private readonly userRepository: UserRepository, private readonly rolRepository: UserRolRepository) {}

  async execute(dto: CreateUserDto): Promise<GetAllUserDto> {
    const roleExists = await this.rolRepository.getById(dto.rolId);

    if (!roleExists) throw new Error("El rol seleccionado no existe");

    if (dto.password !== dto.confirmPassword) throw new Error("Ambas contraseñas deben coincidir");

    const hashedPassword = await bcryptAdapter.hash(dto.password);

    dto.hashedPassword = hashedPassword;

    const userCreated = await this.userRepository.create(dto);

    return userCreated;
  }
}
