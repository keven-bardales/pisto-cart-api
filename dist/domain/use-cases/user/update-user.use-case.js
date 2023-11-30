"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserUseCase = void 0;
class UpdateUserUseCase {
    userRepository;
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(id, dto) {
        const userCreated = await this.userRepository.update(id, dto);
        return userCreated;
    }
}
exports.UpdateUserUseCase = UpdateUserUseCase;
//# sourceMappingURL=update-user.use-case.js.map