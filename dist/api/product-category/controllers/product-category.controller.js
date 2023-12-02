"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productCategoryController = exports.ProductCategoryController = void 0;
const create_product_category_dto_1 = require("@src/domain/dtos/product-category/create-product-category.dto");
const create_product_category_use_case_1 = require("@src/domain/use-cases/product-category/create-product-category.use-case");
const get_all_product_category_use_case_1 = require("@src/domain/use-cases/product-category/get-all-product-category.use-case");
const response_1 = require("@src/domain/wrappers/response");
const product_category_repository_impl_1 = require("@src/infrastructure/repositories/product-category.repository.impl");
class ProductCategoryController {
    productCategoryRepository;
    constructor(productCategoryRepository) {
        this.productCategoryRepository = productCategoryRepository;
    }
    getAll = (req, res, next) => {
        new get_all_product_category_use_case_1.GetAllProductCategoryUseCase(this.productCategoryRepository)
            .execute()
            .then((productCategories) => {
            if (productCategories.length === 0) {
                return res.status(200).json(response_1.ApiResponse.success({
                    data: productCategories,
                    message: "No hay categorias de producto",
                    statusCode: 200,
                }));
            }
            return res.status(201).json(response_1.ApiResponse.success({
                data: productCategories,
                message: "Categorias de producto obtenidas correctamente",
                statusCode: 201,
            }));
        })
            .catch((error) => {
            next(error);
        });
    };
    create = (req, res, next) => {
        const productCategoryDto = create_product_category_dto_1.CreateProductCategoryDto.create(req.body);
        new create_product_category_use_case_1.CreateProductCategoryUseCase(this.productCategoryRepository)
            .execute(productCategoryDto)
            .then((productCategory) => {
            return res.status(200).json(response_1.ApiResponse.success({
                data: productCategory,
                message: "Categoria de producto creada correctamente",
                statusCode: 200,
            }));
        })
            .catch((error) => {
            next(error);
        });
    };
}
exports.ProductCategoryController = ProductCategoryController;
exports.productCategoryController = new ProductCategoryController(product_category_repository_impl_1.productCategoryRepository);
//# sourceMappingURL=product-category.controller.js.map