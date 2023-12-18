import { UserEntity } from "@domain/entities/user.entity";

export class CustomerEntity {
  constructor(
    public id: string,
    public firstName: string,
    public lastName: string,
    public fullName: string,
    public email: string,
    public imageUrl: string,
    public userId: typeof UserEntity.prototype.id,
    public createdAt: string,
    public updatedAt: string,
    public user: UserEntity
  ) {}

  static fromObject(object: any): CustomerEntity {
    return new CustomerEntity(object.id, object.firstName, object.lastName, object.fullName, object.email, object.imageUrl, object.userId, object.createdAt, object.updatedAt, UserEntity.fromObject(object?.user));
  }
}
