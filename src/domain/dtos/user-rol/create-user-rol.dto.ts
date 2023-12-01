import { UserRolEntity } from "@src/domain/entities/user-rol.entity";

export class CreateUserRolDto {
  constructor(public readonly name: typeof UserRolEntity.prototype.name) {}

  static fromObject(object: any): CreateUserRolDto {
    return new CreateUserRolDto(object?.name);
  }
}
