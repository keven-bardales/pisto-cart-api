"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserUseCase = void 0;
class CreateUserUseCase {
    userRepository;
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(dto) {
        const userCreated = await this.userRepository.create(dto);
        return userCreated;
    }
}
exports.CreateUserUseCase = CreateUserUseCase;
//# sourceMappingURL=create-user.use-case.js.map