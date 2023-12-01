"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserRolUseCase = void 0;
class CreateUserRolUseCase {
    userRolRepository;
    constructor(userRolRepository) {
        this.userRolRepository = userRolRepository;
    }
    async execute(dto) {
        const rol = await this.userRolRepository.create(dto);
        return rol;
    }
}
exports.CreateUserRolUseCase = CreateUserRolUseCase;
//# sourceMappingURL=create-user-rol.use-case.js.map