"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProductUseCase = void 0;
const bad_request_exception_1 = require("@src/domain/exceptions/bad-request.exception");
class UpdateProductUseCase {
    productRepository;
    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    async execute(dto) {
        const product = await this.productRepository.checkIfExists({ code: dto.code, id: dto.id });
        if (!product) {
            throw new Error("Producto no encontrado");
        }
        if (product.code !== dto.code) {
            throw new bad_request_exception_1.BadRequestException("El codigo no puede ser modificado");
        }
        const updatedProduct = await this.productRepository.update(dto);
        return updatedProduct;
    }
}
exports.UpdateProductUseCase = UpdateProductUseCase;
//# sourceMappingURL=update-product.use-case.js.map