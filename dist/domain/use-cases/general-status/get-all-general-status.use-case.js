"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllGeneralStatusUseCase = void 0;
class GetAllGeneralStatusUseCase {
    generalStatusRepository;
    constructor(generalStatusRepository) {
        this.generalStatusRepository = generalStatusRepository;
    }
    async execute() {
        return this.generalStatusRepository.getAll();
    }
}
exports.GetAllGeneralStatusUseCase = GetAllGeneralStatusUseCase;
//# sourceMappingURL=get-all-general-status.use-case.js.map