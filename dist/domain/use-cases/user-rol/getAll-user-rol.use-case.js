"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllUserRolUseCase = void 0;
class GetAllUserRolUseCase {
    userRolRepository;
    constructor(userRolRepository) {
        this.userRolRepository = userRolRepository;
    }
    async execute() {
        const roles = await this.userRolRepository.getAll();
        return roles;
    }
}
exports.GetAllUserRolUseCase = GetAllUserRolUseCase;
//# sourceMappingURL=getAll-user-rol.use-case.js.map