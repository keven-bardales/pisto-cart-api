"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginUserUseCase = void 0;
const bcrypt_adapter_1 = require("@src/config/bcrypt.adapter");
const get_all_user_dto_1 = require("@src/domain/dtos/user/get-all-user.dto");
class LoginUserUseCase {
    userRepository;
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(dto) {
        const userCreated = await this.userRepository.login(dto);
        const passwordtMatch = bcrypt_adapter_1.bcryptAdapter.compare(dto.password, userCreated.password);
        if (!passwordtMatch)
            throw new Error("El usuario o la contraseña son incorrectos");
        return get_all_user_dto_1.GetAllUserDto.fromObject(userCreated);
    }
}
exports.LoginUserUseCase = LoginUserUseCase;
//# sourceMappingURL=login-user.use-case.js.map