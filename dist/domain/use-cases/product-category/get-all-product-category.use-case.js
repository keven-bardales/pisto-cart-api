"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllProductCategoryUseCase = void 0;
class GetAllProductCategoryUseCase {
    productCategoryRepository;
    constructor(productCategoryRepository) {
        this.productCategoryRepository = productCategoryRepository;
    }
    execute() {
        return this.productCategoryRepository.getAll();
    }
}
exports.GetAllProductCategoryUseCase = GetAllProductCategoryUseCase;
//# sourceMappingURL=get-all-product-category.use-case.js.map