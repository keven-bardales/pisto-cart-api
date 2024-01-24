"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductDataSourceImpl = void 0;
const data_1 = require("@src/data");
const get_all_product_dto_1 = require("@src/domain/dtos/product/get-all-product.dto");
const get_paginated_dto_1 = require("@src/domain/dtos/shared/get-paginated-dto");
const productIncludes = {
    productCategory: {
        include: {
            parentCategory: {
                include: {
                    parentCategory: {
                        include: {
                            parentCategory: {
                                include: {
                                    parentCategory: true,
                                },
                            },
                        },
                    },
                },
            },
        },
    },
    productStatus: true,
    generalStatus: true,
};
class ProductDataSourceImpl {
    async getAll(dto) {
        const getAllProductOptions = {
            ...dto.forPrisma,
            where: {
                OR: [
                    {
                        name: {
                            contains: dto.search,
                            mode: "insensitive",
                        },
                    },
                    {
                        code: {
                            contains: dto.search,
                            mode: "insensitive",
                        },
                    },
                    {
                        productCategory: {
                            name: {
                                contains: dto.search,
                                mode: "insensitive",
                            },
                        },
                    },
                    {
                        productCategory: {
                            parentCategory: {
                                name: {
                                    contains: dto.search,
                                    mode: "insensitive",
                                },
                            },
                        },
                    },
                    {
                        productCategory: {
                            parentCategory: {
                                parentCategory: {
                                    name: {
                                        contains: dto.search,
                                        mode: "insensitive",
                                    },
                                },
                            },
                        },
                    },
                    {
                        productCategory: {
                            parentCategory: {
                                parentCategory: {
                                    parentCategory: {
                                        name: {
                                            contains: dto.search,
                                            mode: "insensitive",
                                        },
                                    },
                                },
                            },
                        },
                    },
                ],
            },
            include: productIncludes,
        };
        if (dto.all) {
            const products = await data_1.prisma.product.findMany({
                include: getAllProductOptions.include,
            });
            return get_paginated_dto_1.GetPaginatedDto.fromObject({
                currentPage: 1,
                items: products.map((product) => get_all_product_dto_1.GetAllProductDto.create(product)),
                limit: products.length,
                totalItems: products.length,
            });
        }
        const products = await data_1.prisma.product.findMany({
            ...getAllProductOptions,
        });
        const totalItems = await data_1.prisma.product.count({
            where: getAllProductOptions.where,
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
            include: productIncludes,
        });
        return get_all_product_dto_1.GetAllProductDto.create(product);
    }
    async getById(id) {
        const product = await data_1.prisma.product.findUnique({
            where: {
                id,
            },
            include: productIncludes,
        });
        if (!product) {
            return null;
        }
        return get_all_product_dto_1.GetAllProductDto.create(product);
    }
    async update(dto) {
        const product = await data_1.prisma.product.update({
            where: {
                id: dto.id,
            },
            data: {
                ...dto.getValues(),
            },
            include: productIncludes,
        });
        return get_all_product_dto_1.GetAllProductDto.create(product);
    }
    async findByCode(code) {
        const product = await data_1.prisma.product.findUnique({
            where: {
                code,
            },
            include: productIncludes,
        });
        if (!product) {
            return null;
        }
        return get_all_product_dto_1.GetAllProductDto.create(product);
    }
    async checkIfExists(params) {
        const product = await data_1.prisma.product.findFirst({
            where: {
                OR: [
                    {
                        id: {
                            equals: params.id,
                        },
                    },
                    {
                        code: {
                            equals: params.code,
                            mode: "insensitive",
                        },
                    },
                ],
            },
        });
        if (!product) {
            return null;
        }
        return get_all_product_dto_1.GetAllProductDto.create(product);
    }
}
exports.ProductDataSourceImpl = ProductDataSourceImpl;
//# sourceMappingURL=product.datasource.impl.js.map