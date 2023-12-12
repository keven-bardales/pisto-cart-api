"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productDataSource = exports.ProductDataSourceImpl = void 0;
const data_1 = require("@src/data");
const get_all_product_dto_1 = require("@src/domain/dtos/product/get-all-product.dto");
const get_paginated_dto_1 = require("@src/domain/dtos/shared/get-paginated-dto");
class ProductDataSourceImpl {
    async getAll(dto) {
        const products = await data_1.prisma.product.findMany({
            include: {
                productCategory: true,
            },
            skip: (dto.page - 1) * dto.limit,
            take: dto.limit,
            where: {
                name: {
                    contains: dto.search,
                    mode: "insensitive",
                },
                productCategory: {
                    name: {
                        contains: dto.search,
                        mode: "insensitive",
                    },
                },
            },
            orderBy: {
                [dto.column]: dto.order,
            },
        });
        const totalItems = await data_1.prisma.product.count({
            where: {
                name: {
                    contains: dto.search,
                    mode: "insensitive",
                },
                productCategory: {
                    name: {
                        contains: dto.search,
                        mode: "insensitive",
                    },
                },
            },
        });
        return get_paginated_dto_1.GetPaginatedDto.fromObject({
            currentPage: dto.page,
            items: products.map((product) => get_all_product_dto_1.GetAllProductDto.create(product)),
            limit: dto.limit,
            totalItems,
        });
    }
    async create(dto) {
        const product = await data_1.prisma.product.create({
            data: {
                ...dto,
            },
        });
        return get_all_product_dto_1.GetAllProductDto.create(product);
    }
}
exports.ProductDataSourceImpl = ProductDataSourceImpl;
exports.productDataSource = new ProductDataSourceImpl();
//# sourceMappingURL=product.datasource.impl.js.map