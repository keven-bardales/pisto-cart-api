"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginUserDto = void 0;
class LoginUserDto {
    loginCredential;
    password;
    constructor(loginCredential, password) {
        this.loginCredential = loginCredential;
        this.password = password;
    }
    static create(props) {
        const { loginCredential, password } = props;
        return new LoginUserDto(loginCredential, password);
    }
}
exports.LoginUserDto = LoginUserDto;
//# sourceMappingURL=login-user.dto.js.map