"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRepositoryImpl = void 0;
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
//# sourceMappingURL=product.repository.impl.js.map