import { UserEntity } from "@domain/entities/user.entity";
import { RolPermissionEntity } from "./rol-permission.entity";

export class UserRolEntity {
  constructor(public id: number, public name: string, public users?: UserEntity[], public rolPermissions?: RolPermissionEntity[]) {}

  static fromObject(object: any): UserRolEntity {
    return new UserRolEntity(object?.id, object?.name, object?.users ?? null, object?.rolPermissions ?? null);
  }
}
