import { GetAllUserDto } from "@domain/dtos/user/get-all-user.dto";
import { CreateUserDto } from "@domain/dtos/user/create-user.dto";
import { UserEntity } from "@domain/entities/user.entity";
import { UpdateUserDto } from "@domain/dtos/user/update-user.dto";
import { UserWithPasswordDto } from "@domain/dtos/user/user-with-password.dto";
import { LoginUserDto } from "@domain/dtos/user/login-user.dto";

export abstract class UserRepository {
  abstract getAll(): Promise<GetAllUserDto[]>;

  abstract getById(id: typeof UserEntity.prototype.id): Promise<GetAllUserDto>;

  abstract create(user: CreateUserDto): Promise<GetAllUserDto>;

  abstract update(id: typeof UserEntity.prototype.id, user: UpdateUserDto): Promise<GetAllUserDto>;

  abstract checkIfUserExistsByParams(params: { [key: string]: any }): Promise<GetAllUserDto>;

  abstract login(dto: LoginUserDto): Promise<UserWithPasswordDto>;
}
