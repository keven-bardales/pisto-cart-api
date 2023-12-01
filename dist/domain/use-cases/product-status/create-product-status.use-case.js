"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductStatusUseCase = void 0;
class CreateProductStatusUseCase {
    productStatusRepository;
    constructor(productStatusRepository) {
        this.productStatusRepository = productStatusRepository;
    }
    async execute(dto) {
        return await this.productStatusRepository.create(dto);
    }
}
exports.CreateProductStatusUseCase = CreateProductStatusUseCase;
//# sourceMappingURL=create-product-status.use-case.js.map