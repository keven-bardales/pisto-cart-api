import { UserEntity } from "@src/domain/entities/user.entity";
import { GetAllUserDto } from "./get-all-user.dto";

export class UserWithPasswordDto {
  constructor(
    public id: typeof UserEntity.prototype.id,
    public firstName: typeof UserEntity.prototype.firstName,
    public lastName: typeof UserEntity.prototype.lastName,
    public fullName: typeof UserEntity.prototype.fullName,
    public email: typeof UserEntity.prototype.email,
    public imageUrl: typeof UserEntity.prototype.imageUrl,
    public rolId: typeof UserEntity.prototype.rolId,
    public generalStatusId: typeof UserEntity.prototype.generalStatusId,
    public createdAt: typeof UserEntity.prototype.createdAt,
    public updatedAt: typeof UserEntity.prototype.updatedAt,
    public rol: typeof UserEntity.prototype.rol,
    public password: string
  ) {}

  static fromObject(object: any): UserWithPasswordDto {
    return new UserWithPasswordDto(
      object?.id,
      object?.firstName,
      object?.lastName,
      object?.fullName,
      object?.email,
      object?.imageUrl,
      object?.rolId,
      object?.generalStatusId,
      object?.createdAt,
      object?.updatedAt,
      object?.rol,
      object?.password
    );
  }
}
