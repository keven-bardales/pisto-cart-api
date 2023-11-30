"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllUsersUseCase = void 0;
class GetAllUsersUseCase {
    userRepository;
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute() {
        const users = await this.userRepository.getAll();
        return users;
    }
}
exports.GetAllUsersUseCase = GetAllUsersUseCase;
//# sourceMappingURL=getAll-users.use-case.js.map