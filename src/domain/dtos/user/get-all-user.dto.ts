import { UserEntity } from "@domain/entities/user.entity";
import { GetAllUserRolDto } from "../user-rol/get-all-rol.dto";

export class GetAllUserDto {
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
    public rol: GetAllUserRolDto
  ) {}

  static fromObject(object: any): GetAllUserDto {
    return new GetAllUserDto(
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
      object?.rol
    );
  }
}
