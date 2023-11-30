import { UserEntity } from "@domain/entities/user.entity";

export class UserRolEntity {
  constructor(
    public id: string,
    public name: string,
    public users?: UserEntity[]
  ) {}

  static fromObject(object: any): UserRolEntity {
    return new UserRolEntity(object.id, object.name, object?.users);
  }
}
