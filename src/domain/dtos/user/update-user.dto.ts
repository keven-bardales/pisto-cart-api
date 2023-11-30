import { UserEntity } from "@src/domain/entities/user.entity";

export class UpdateUserDto {
  constructor(
    public readonly id: typeof UserEntity.prototype.id,
    public readonly firstName: typeof UserEntity.prototype.firstName,
    public readonly lastName: typeof UserEntity.prototype.lastName,
    public readonly fullName: typeof UserEntity.prototype.fullName,
    public readonly email: typeof UserEntity.prototype.email,
    public readonly imageUrl: typeof UserEntity.prototype.imageUrl,
    public readonly rolId: typeof UserEntity.prototype.rolId,
    public readonly generalStatusId: typeof UserEntity.prototype.generalStatusId
  ) {}

  static create(props: { [key: string]: any }): UpdateUserDto {
    const {
      id,
      firstName,
      lastName,
      fullName,
      email,
      imageUrl,
      rolId,
      generalStatusId,
    } = props;

    return new UpdateUserDto(
      id,
      firstName,
      lastName,
      fullName,
      email,
      imageUrl,
      rolId,
      generalStatusId
    );
  }

  get valuesToUpdate(): { [key: string]: unknown } {
    const returnObject: any = {};

    if (this.firstName) returnObject["firstName"] = this.firstName;
    if (this.lastName) returnObject["lastName"] = this.lastName;
    if (this.fullName) returnObject["fullName"] = this.fullName;
    if (this.email) returnObject["email"] = this.email;
    if (this.imageUrl) returnObject["imageUrl"] = this.imageUrl;
    if (this.rolId) returnObject["rolId"] = this.rolId;
    if (this.generalStatusId)
      returnObject["generalStatusId"] = this.generalStatusId;

    return returnObject;
  }
}
