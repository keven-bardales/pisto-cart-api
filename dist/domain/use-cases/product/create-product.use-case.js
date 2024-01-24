"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductUseCase = void 0;
const bad_request_exception_1 = require("@src/domain/exceptions/bad-request.exception");
class CreateProductUseCase {
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
    async exucute(dto) {
        const productExists = await this.productRepository.findByCode(dto.code);
        if (productExists) {
            throw new Error("Ya existe un producto con ese codigo");
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
        return this.productRepository.create(dto);
    }
}
exports.CreateProductUseCase = CreateProductUseCase;
//# sourceMappingURL=create-product.use-case.js.map