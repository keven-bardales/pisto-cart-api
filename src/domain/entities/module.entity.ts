import { PermissionEntity } from "./permission.entity";

export class ModuleEntity {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public createdAt: string,
    public updatedAt: string,
    permissions?: PermissionEntity[]
  ) {}

  static fromObject(object: any): ModuleEntity {
    return new ModuleEntity(object?.id, object?.name, object?.description, object?.createdAt, object?.updatedAt, object?.permissions ?? null);
  }
}
