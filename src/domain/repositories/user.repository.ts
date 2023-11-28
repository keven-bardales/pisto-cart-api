import { UserEntity } from "domain/entities/user.entity";

export abstract class UserRepository {
  abstract getAll(): Promise<UserEntity[]>;
}
