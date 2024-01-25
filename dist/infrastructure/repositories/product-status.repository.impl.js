"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productStatusRepository = exports.ProductStatusRepositoryImpl = void 0;
const product_status_datasource_impl_1 = require("@infrastructure/datasource/product-status.datasource.impl");
class ProductStatusRepositoryImpl {
    dataSource;
    constructor(dataSource) {
        this.dataSource = dataSource;
    }
    create(dto) {
        return this.dataSource.create(dto);
    }
    getAll() {
        return this.dataSource.getAll();
    }
    checkIfExists(params) {
        return this.dataSource.checkIfExists(params);
    }
}
exports.ProductStatusRepositoryImpl = ProductStatusRepositoryImpl;
exports.productStatusRepository = new ProductStatusRepositoryImpl(product_status_datasource_impl_1.productStatusDataSource);
//# sourceMappingURL=product-status.repository.impl.js.map