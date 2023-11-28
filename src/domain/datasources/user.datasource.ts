import { UserEntity } from "domain/entities/user.entity";

export abstract class UserDataSource {
  abstract getAll(): Promise<UserEntity[]>;
}
