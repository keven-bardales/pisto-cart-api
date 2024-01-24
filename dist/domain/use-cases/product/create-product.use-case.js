"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductUseCase = void 0;
class CreateProductUseCase {
    productRepository;
    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    async exucute(dto) {
        const productExists = await this.productRepository.findByCode(dto.code);
        if (productExists) {
            throw new Error("Ya existe un producto con ese codigo");
        }
        return this.productRepository.create(dto);
    }
}
exports.CreateProductUseCase = CreateProductUseCase;
//# sourceMappingURL=create-product.use-case.js.map