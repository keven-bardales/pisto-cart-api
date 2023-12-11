import { UserEntity } from "@src/domain/entities/user.entity";

export class LoginUserDto {
  constructor(public readonly loginCredential: typeof UserEntity.prototype.email | typeof UserEntity.prototype.email, public readonly password: string) {}

  static create(props: { [key: string]: any }): LoginUserDto {
    const { loginCredential, password } = props;

    return new LoginUserDto(loginCredential, password);
  }
}
