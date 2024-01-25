"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProductUseCase = void 0;
const bad_request_exception_1 = require("@src/domain/exceptions/bad-request.exception");
class UpdateProductUseCase {
    productRepository;
    generalStatusRepository;
    productCategoryRepository;
    productStatusRepository;
    constructor(productRepository, generalStatusRepository, productCategoryRepository, productStatusRepository) {
        this.productRepository = productRepository;
        this.generalStatusRepository = generalStatusRepository;
        this.productCategoryRepository = productCategoryRepository;
        this.productStatusRepository = productStatusRepository;
    }
    async execute(dto) {
        const product = await this.productRepository.checkIfExists({ code: dto.code, id: dto.id });
        if (!product) {
            throw new Error("Producto no encontrado");
        }
        if (product.code !== dto.code) {
            throw new bad_request_exception_1.BadRequestException("El codigo no puede ser modificado");
        }
        const generalStatus = await this.generalStatusRepository.checkIfExists({ id: dto.generalStatusId });
        if (!generalStatus) {
            throw new bad_request_exception_1.BadRequestException("El estado general no existe");
        }
        const productCategory = await this.productCategoryRepository.checkIfExists({ id: dto.productCategoryId });
        if (!productCategory) {
            throw new bad_request_exception_1.BadRequestException("La categoria de producto no existe");
        }
        const productStatus = await this.productStatusRepository.checkIfExists({ id: dto.productStatusId });
        if (!productStatus) {
            throw new bad_request_exception_1.BadRequestException("El estado del producto no existe");
        }
        const updatedProduct = await this.productRepository.update(dto);
        return updatedProduct;
    }
}
exports.UpdateProductUseCase = UpdateProductUseCase;
//# sourceMappingURL=update-product.use-case.js.map