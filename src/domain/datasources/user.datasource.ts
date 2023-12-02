import { UserEntity } from "@domain/entities/user.entity";
import { GetAllUserDto } from "@domain/dtos/user/get-all-user.dto";
import { CreateUserDto } from "@domain/dtos/user/create-user.dto";
import { UpdateUserDto } from "@domain/dtos/user/update-user.dto";

export abstract class UserDataSource {
  abstract getAll(): Promise<GetAllUserDto[]>;
  abstract getById(id: typeof UserEntity.prototype.id): Promise<GetAllUserDto>;
  abstract create(user: CreateUserDto): Promise<GetAllUserDto>;
  abstract update(
    id: typeof UserEntity.prototype.id,
    user: UpdateUserDto
  ): Promise<GetAllUserDto>;

  abstract checkIfUserExistsByParams(params: {
    [key: string]: any;
  }): Promise<typeof UserEntity.prototype.id>;
}
