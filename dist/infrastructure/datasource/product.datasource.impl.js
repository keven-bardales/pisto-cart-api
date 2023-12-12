"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productDataSource = exports.ProductDataSourceImpl = void 0;
const data_1 = require("@src/data");
const get_all_product_dto_1 = require("@src/domain/dtos/product/get-all-product.dto");
const get_paginated_dto_1 = require("@src/domain/dtos/shared/get-paginated-dto");
class ProductDataSourceImpl {
    async getAll(dto) {
        const { page, limit, column, order, search, all } = dto;
        if (all) {
            const products = await data_1.prisma.product.findMany({
                include: {
                    productCategory: true,
                },
                where: {
                    OR: [
                        {
                            name: {
                                contains: search,
                                mode: "insensitive",
                            },
                        },
                        {
                            productCategory: {
                                name: {
                                    contains: search,
                                    mode: "insensitive",
                                },
                            },
                        },
                    ],
                },
                orderBy: {
                    [column]: order,
                },
            });
            return get_paginated_dto_1.GetPaginatedDto.fromObject({
                currentPage: 1,
                hasNextPage: false,
                hasPreviousPage: false,
                items: products.map((product) => get_all_product_dto_1.GetAllProductDto.create(product)),
                limit: products.length,
                nextPage: 1,
                previousPage: 1,
                totalItems: products.length,
                totalPages: 1,
            });
        }
        const productsAndTotalCount = await data_1.prisma.product.findMany({
            include: {
                productCategory: true,
            },
            where: {
                OR: [
                    {
                        name: {
                            contains: search,
                            mode: "insensitive",
                        },
                    },
                    {
                        productCategory: {
                            name: {
                                contains: search,
                                mode: "insensitive",
                            },
                        },
                    },
                ],
            },
            orderBy: {
                [column]: order,
            },
            skip: (page - 1) * limit,
            take: limit,
        });
        const totalItems = await data_1.prisma.product.aggregate({
            where: {
                OR: [
                    {
                        name: {
                            contains: search,
                            mode: "insensitive",
                        },
                    },
                    {
                        productCategory: {
                            name: {
                                contains: search,
                                mode: "insensitive",
                            },
                        },
                    },
                ],
            },
            _count: {
                name: true,
            },
        });
        return get_paginated_dto_1.GetPaginatedDto.fromObject({
            currentPage: page,
            hasNextPage: productsAndTotalCount.length === limit,
            hasPreviousPage: page > 1,
            items: productsAndTotalCount.map((product) => get_all_product_dto_1.GetAllProductDto.create(product)),
            limit,
            nextPage: page + 1,
            previousPage: page - 1,
            totalItems: totalItems._count.name,
            totalPages: Math.ceil(totalItems._count.name / limit),
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