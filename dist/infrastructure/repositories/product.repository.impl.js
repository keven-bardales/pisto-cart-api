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
    update(dto) {
        const product = this.dataSource.update(dto);
        return product;
    }
    async findByCode(code) {
        const product = await this.dataSource.findByCode(code);
        if (!product) {
            return null;
        }
        return product;
    }
    async checkIfExists(params) {
        const product = await this.dataSource.checkIfExists({
            code: params.code,
            id: params.id,
        });
        if (!product) {
            return null;
        }
        return product;
    }
    async delete(id) {
        const product = await this.dataSource.delete(id);
        return product;
    }
}
exports.ProductRepositoryImpl = ProductRepositoryImpl;
//# sourceMappingURL=product.repository.impl.js.map