"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetByIdProductCategoryUseCase = void 0;
class GetByIdProductCategoryUseCase {
    productCategoryRepository;
    constructor(productCategoryRepository) {
        this.productCategoryRepository = productCategoryRepository;
    }
    execute(id) {
        return this.productCategoryRepository.getById(id);
    }
}
exports.GetByIdProductCategoryUseCase = GetByIdProductCategoryUseCase;
//# sourceMappingURL=get-by-id-product-category.use-case.js.map