import { UserRolEntity } from "@src/domain/entities/user-rol.entity";

export class GetAllUserRolDto {
  constructor(
    public readonly id: typeof UserRolEntity.prototype.id,
    public readonly name: typeof UserRolEntity.prototype.name
  ) {}

  static fromObject(object: any): GetAllUserRolDto {
    return new GetAllUserRolDto(object?.id, object?.name);
  }
}
