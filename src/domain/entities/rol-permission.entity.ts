import { PermissionEntity } from "./permission.entity";
import { UserRolEntity } from "./user-rol.entity";

export class RolPermissionEntity {
  constructor(
    public id: number,
    public rolId: number,
    public permissionId: number,
    public createdAt: string,
    public updatedAt: string,
    public rol?: UserRolEntity,
    public permission?: PermissionEntity
  ) {}

  static fromObject(object: any): RolPermissionEntity {
    return new RolPermissionEntity(
      object?.id,
      object?.rolId,
      object?.permissionId,
      object?.createdAt,
      object?.updatedAt,
      UserRolEntity.fromObject(object?.rol),
      PermissionEntity.fromObject(object?.permission)
    );
  }
}
