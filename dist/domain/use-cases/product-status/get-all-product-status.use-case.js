"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllProductStatusUseCase = void 0;
class GetAllProductStatusUseCase {
    productStatusRepository;
    constructor(productStatusRepository) {
        this.productStatusRepository = productStatusRepository;
    }
    async execute() {
        const productStatuses = await this.productStatusRepository.getAll();
        return productStatuses;
    }
}
exports.GetAllProductStatusUseCase = GetAllProductStatusUseCase;
//# sourceMappingURL=get-all-product-status.use-case.js.map