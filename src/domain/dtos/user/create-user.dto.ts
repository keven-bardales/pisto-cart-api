import { UserEntity } from "@src/domain/entities/user.entity";

export class CreateUserDto {
  constructor(
    public readonly googleId: typeof UserEntity.prototype.googleId,
    public readonly firstName: typeof UserEntity.prototype.firstName,
    public readonly lastName: typeof UserEntity.prototype.lastName,
    public readonly fullName: typeof UserEntity.prototype.fullName,
    public readonly email: typeof UserEntity.prototype.email,
    public readonly imageUrl: typeof UserEntity.prototype.imageUrl,
    public readonly rolId: typeof UserEntity.prototype.rolId,
    public readonly generalStatusId: typeof UserEntity.prototype.generalStatusId,
    public readonly password?: string,
    public readonly confirmPassword?: string
  ) {}

  get getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  static create(props: { [key: string]: any }): CreateUserDto {
    const {
      googleId,
      firstName,
      lastName,
      email,
      imageUrl,
      rolId,
      generalStatusId,
      password,
      confirmPassword,
    } = props;

    return new CreateUserDto(
      googleId,
      firstName,
      lastName,
      `${firstName} ${lastName}`,
      email,
      imageUrl,
      rolId,
      generalStatusId,
      password,
      confirmPassword
    );
  }
}
