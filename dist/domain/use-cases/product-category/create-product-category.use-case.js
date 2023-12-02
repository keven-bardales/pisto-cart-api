"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductCategoryUseCase = void 0;
class CreateProductCategoryUseCase {
    productCategoryRepository;
    constructor(productCategoryRepository) {
        this.productCategoryRepository = productCategoryRepository;
    }
    execute(dto) {
        return this.productCategoryRepository.create(dto);
    }
}
exports.CreateProductCategoryUseCase = CreateProductCategoryUseCase;
//# sourceMappingURL=create-product-category.use-case.js.map