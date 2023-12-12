"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProductUseCase = void 0;
class UpdateProductUseCase {
    productRepository;
    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    async execute(id, dto) {
        const product = await this.productRepository.getById(id);
        if (!product) {
            throw new Error("Producto no encontrado");
        }
        const updatedProduct = await this.productRepository.update(id, dto);
        return updatedProduct;
    }
}
exports.UpdateProductUseCase = UpdateProductUseCase;
//# sourceMappingURL=update-product.use-case.js.map