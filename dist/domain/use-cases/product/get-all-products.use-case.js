"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllProductUseCase = void 0;
class GetAllProductUseCase {
    productRepository;
    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    exucute(dto) {
        return this.productRepository.getAll(dto);
    }
}
exports.GetAllProductUseCase = GetAllProductUseCase;
//# sourceMappingURL=get-all-products.use-case.js.map