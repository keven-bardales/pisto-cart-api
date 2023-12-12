"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productCategoryRepository = exports.ProductCategoryImpl = void 0;
const product_category_datasource_impl_1 = require("@src/infrastructure/datasource/product-category.datasource.impl");
class ProductCategoryImpl {
    productCategoryDataSource;
    constructor(productCategoryDataSource) {
        this.productCategoryDataSource = productCategoryDataSource;
    }
    getAll() {
        return this.productCategoryDataSource.getAll();
    }
    create(dto) {
        return this.productCategoryDataSource.create(dto);
    }
    getById(id) {
        return this.productCategoryDataSource.getById(id);
    }
}
exports.ProductCategoryImpl = ProductCategoryImpl;
exports.productCategoryRepository = new ProductCategoryImpl(product_category_datasource_impl_1.productCategoryDataSource);
//# sourceMappingURL=product-category.repository.impl.js.map