"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productCategoryDataSource = exports.ProductCategoryDataSourceImpl = void 0;
const data_1 = require("@src/data");
const get_all_product_category_dto_1 = require("@src/domain/dtos/product-category/get-all-product-category.dto");
class ProductCategoryDataSourceImpl {
    async create(dto) {
        const productCategory = await data_1.prisma.productCategory.create({
            data: {
                ...dto,
            },
        });
        return get_all_product_category_dto_1.GetAllProductCategoryDto.create(productCategory);
    }
    async getAll() {
        const productCategories = await data_1.prisma.productCategory.findMany();
        return productCategories.map((productCategory) => get_all_product_category_dto_1.GetAllProductCategoryDto.create(productCategory));
    }
    async getById(id) {
        const productCategory = await data_1.prisma.productCategory.findUnique({
            where: {
                id,
            },
        });
        return get_all_product_category_dto_1.GetAllProductCategoryDto.create(productCategory);
    }
    async checkIfExists(params) {
        const productCategory = await data_1.prisma.productCategory.findUnique({
            where: {
                id: params.id,
            },
        });
        if (!productCategory) {
            return null;
        }
        return get_all_product_category_dto_1.GetAllProductCategoryDto.create(productCategory);
    }
}
exports.ProductCategoryDataSourceImpl = ProductCategoryDataSourceImpl;
exports.productCategoryDataSource = new ProductCategoryDataSourceImpl();
//# sourceMappingURL=product-category.datasource.impl.js.map