"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetByIdUserUseCase = void 0;
class GetByIdUserUseCase {
    userRepository;
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(id) {
        const userFound = await this.userRepository.getById(id);
        return userFound;
    }
}
exports.GetByIdUserUseCase = GetByIdUserUseCase;
//# sourceMappingURL=getbyId-user.use-case.js.map