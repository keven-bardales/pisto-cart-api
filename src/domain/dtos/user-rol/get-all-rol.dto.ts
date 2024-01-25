import { UserRolEntity } from "@src/domain/entities/user-rol.entity";

export class GetAllUserRolDto {
  constructor(
    public id: typeof UserRolEntity.prototype.id,
    public name: typeof UserRolEntity.prototype.name,
    public permissions: typeof UserRolEntity.prototype.rolPermissions
  ) {}

  static fromObject(object: any): GetAllUserRolDto {
    return new GetAllUserRolDto(object?.id, object?.name, object?.permissions);
  }
}
