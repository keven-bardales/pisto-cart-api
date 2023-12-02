"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductUseCase = void 0;
class CreateProductUseCase {
    productRepository;
    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    exucute(dto) {
        return this.productRepository.create(dto);
    }
}
exports.CreateProductUseCase = CreateProductUseCase;
//# sourceMappingURL=create-product.use-case.js.map