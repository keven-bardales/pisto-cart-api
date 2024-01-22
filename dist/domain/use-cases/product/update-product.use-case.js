"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProductUseCase = void 0;
const product_entity_1 = require("@src/domain/entities/product.entity");
class UpdateProductUseCase {
    productRepository;
    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    async execute(id, dto) {
        const product = await this.productRepository.getById(product_entity_1.ProductEntity.prototype.id);
        if (!product) {
            throw new Error("Producto no encontrado");
        }
        const updatedProduct = await this.productRepository.update(product_entity_1.ProductEntity.prototype.id, dto);
        return updatedProduct;
    }
}
exports.UpdateProductUseCase = UpdateProductUseCase;
//# sourceMappingURL=update-product.use-case.js.map