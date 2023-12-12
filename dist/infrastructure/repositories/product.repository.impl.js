"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRepository = exports.ProductRepositoryImpl = void 0;
const product_datasource_impl_1 = require("@infrastructure/datasource/product.datasource.impl");
class ProductRepositoryImpl {
    dataSource;
    constructor(dataSource) {
        this.dataSource = dataSource;
    }
    async create(dto) {
        const product = await this.dataSource.create(dto);
        return product;
    }
    async getAll(dto) {
        const products = await this.dataSource.getAll(dto);
        return products;
    }
    async getById(id) {
        const product = await this.dataSource.getById(id);
        return product;
    }
    update(id, dto) {
        const product = this.dataSource.update(id, dto);
        return product;
    }
}
exports.ProductRepositoryImpl = ProductRepositoryImpl;
exports.productRepository = new ProductRepositoryImpl(product_datasource_impl_1.productDataSource);
//# sourceMappingURL=product.repository.impl.js.map