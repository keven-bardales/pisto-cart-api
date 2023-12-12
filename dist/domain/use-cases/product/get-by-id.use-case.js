"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetByIdProductUseCase = void 0;
class GetByIdProductUseCase {
    productRepository;
    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    exucute(id) {
        const product = this.productRepository.getById(id);
        if (!product) {
            throw new Error("Producto no encontrado");
        }
        return product;
    }
}
exports.GetByIdProductUseCase = GetByIdProductUseCase;
//# sourceMappingURL=get-by-id.use-case.js.map