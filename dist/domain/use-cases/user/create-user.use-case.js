"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserUseCase = void 0;
const bcrypt_adapter_1 = require("@src/config/bcrypt.adapter");
class CreateUserUseCase {
    userRepository;
    rolRepository;
    constructor(userRepository, rolRepository) {
        this.userRepository = userRepository;
        this.rolRepository = rolRepository;
    }
    async execute(dto) {
        const roleExists = await this.rolRepository.getById(dto.rolId);
        if (!roleExists)
            throw new Error("El rol seleccionado no existe");
        if (dto.password !== dto.confirmPassword)
            throw new Error("Ambas contraseñas deben coincidir");
        const hashedPassword = await bcrypt_adapter_1.bcryptAdapter.hash(dto.password);
        dto.hashedPassword = hashedPassword;
        const userCreated = await this.userRepository.create(dto);
        return userCreated;
    }
}
exports.CreateUserUseCase = CreateUserUseCase;
//# sourceMappingURL=create-user.use-case.js.map