"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productStatusDataSource = exports.ProductStatusDataSourceImpl = void 0;
const data_1 = require("@src/data");
const product_status_datasource_1 = require("@src/domain/datasources/product-status.datasource");
const get_all_product_status_dto_1 = require("@src/domain/dtos/product-status/get-all-product-status.dto");
class ProductStatusDataSourceImpl extends product_status_datasource_1.ProductStatusDataSource {
    async create(dto) {
        const productStatus = await data_1.prisma.productStatus.create({
            data: {
                name: dto.name,
            },
        });
        return get_all_product_status_dto_1.GetAllProductStatusDto.fromObject(productStatus);
    }
    async getAll() {
        const productStatuses = await data_1.prisma.productStatus.findMany();
        return productStatuses.map((productStatus) => get_all_product_status_dto_1.GetAllProductStatusDto.fromObject(productStatus));
    }
}
exports.ProductStatusDataSourceImpl = ProductStatusDataSourceImpl;
exports.productStatusDataSource = new ProductStatusDataSourceImpl();
//# sourceMappingURL=product-status.datasource.impl.js.map