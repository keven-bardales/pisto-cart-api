import { ModuleEntity } from "./module.entity";
import { RolPermissionEntity } from "./rol-permission.entity";

export class PermissionEntity {
  constructor(
    public id: number,
    public name: string,
    public moduleId: number,
    public createdAt: string,
    public updatedAt: string,
    public module?: ModuleEntity | null,
    public rolPermissions?: RolPermissionEntity[] | null
  ) {}

  static fromObject(object: any): PermissionEntity {
    return new PermissionEntity(
      object?.id,
      object?.name,
      object?.moduleId,
      object?.createdAt,
      object?.updatedAt,
      ModuleEntity.fromObject(object?.module),
      object?.rolPermissions?.map((rolPermission: any) => RolPermissionEntity.fromObject(rolPermission))
    );
  }
}
