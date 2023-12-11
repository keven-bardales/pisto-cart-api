import { bcryptAdapter } from "@src/config/bcrypt.adapter";
import { GetAllUserDto } from "@src/domain/dtos/user/get-all-user.dto";
import { LoginUserDto } from "@src/domain/dtos/user/login-user.dto";
import { UserRepository } from "@src/domain/repositories/user.repository";

export type ILoginUserUseCase = {
  execute(dto: LoginUserDto): Promise<GetAllUserDto>;
};

export class LoginUserUseCase implements ILoginUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(dto: LoginUserDto): Promise<GetAllUserDto> {
    const userCreated = await this.userRepository.login(dto);

    if (!userCreated) throw new Error("El usuario o la contraseña son incorrectos");

    const passwordtMatch = await bcryptAdapter.compare(dto.password, userCreated.password);

    console.log({
      passwordtMatch,
    });

    if (!passwordtMatch) throw new Error("El usuario o la contraseña son incorrectos");

    return GetAllUserDto.fromObject(userCreated);
  }
}
