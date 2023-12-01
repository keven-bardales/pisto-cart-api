"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateGeneralStatusUseCase = void 0;
class CreateGeneralStatusUseCase {
    generalStatusRepository;
    constructor(generalStatusRepository) {
        this.generalStatusRepository = generalStatusRepository;
    }
    async execute(dto) {
        return this.generalStatusRepository.create(dto);
    }
}
exports.CreateGeneralStatusUseCase = CreateGeneralStatusUseCase;
//# sourceMappingURL=create-general-status.use-case.js.map