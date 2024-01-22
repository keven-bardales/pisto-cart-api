"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetByIdProductUseCase = void 0;
const product_entity_1 = require("@src/domain/entities/product.entity");
class GetByIdProductUseCase {
    productRepository;
    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    exucute(id) {
        const product = this.productRepository.getById(product_entity_1.ProductEntity.prototype.id);
        if (!product) {
            throw new Error("Producto no encontrado");
        }
        return product;
    }
}
exports.GetByIdProductUseCase = GetByIdProductUseCase;
//# sourceMappingURL=get-by-id.use-case.js.map