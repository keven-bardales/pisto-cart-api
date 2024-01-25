"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteProductUseCase = void 0;
const bad_request_exception_1 = require("@src/domain/exceptions/bad-request.exception");
class DeleteProductUseCase {
    productRepository;
    constructor(productRepository) {
        this.productRepository = productRepository;
        this.productRepository = productRepository;
    }
    async execute(id) {
        const product = await this.productRepository.checkIfExists({ id });
        if (!product) {
            throw new bad_request_exception_1.BadRequestException("Producto no encontrado");
        }
        const deletedProduct = await this.productRepository.delete(id);
        return deletedProduct;
    }
}
exports.DeleteProductUseCase = DeleteProductUseCase;
//# sourceMappingURL=delete-product.use-case.js.map