"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productController = exports.ProductController = void 0;
const update_product_dto_1 = require("@src/domain/dtos/product/update-product.dto");
const pagination_dto_1 = require("@src/domain/dtos/shared/pagination.dto");
const create_product_use_case_1 = require("@src/domain/use-cases/product/create-product.use-case");
const delete_product_use_case_1 = require("@src/domain/use-cases/product/delete-product.use-case");
const get_all_products_use_case_1 = require("@src/domain/use-cases/product/get-all-products.use-case");
const get_by_id_use_case_1 = require("@src/domain/use-cases/product/get-by-id.use-case");
const update_product_use_case_1 = require("@src/domain/use-cases/product/update-product.use-case");
const response_1 = require("@src/domain/wrappers/response");
const general_status_datasource_impl_1 = require("@src/infrastructure/datasource/general-status.datasource.impl");
const product_category_datasource_impl_1 = require("@src/infrastructure/datasource/product-category.datasource.impl");
const product_status_datasource_impl_1 = require("@src/infrastructure/datasource/product-status.datasource.impl");
const product_datasource_impl_1 = require("@src/infrastructure/datasource/product.datasource.impl");
const general_status_repository_impl_1 = require("@src/infrastructure/repositories/general-status.repository.impl");
const product_category_repository_impl_1 = require("@src/infrastructure/repositories/product-category.repository.impl");
const product_status_repository_impl_1 = require("@src/infrastructure/repositories/product-status.repository.impl");
const product_repository_impl_1 = require("@src/infrastructure/repositories/product.repository.impl");
class ProductController {
    productRepository;
    generalStatusRepository;
    productCategoryRepository;
    productStatusRepository;
    constructor(productRepository, generalStatusRepository, productCategoryRepository, productStatusRepository) {
        this.productRepository = productRepository;
        this.generalStatusRepository = generalStatusRepository;
        this.productCategoryRepository = productCategoryRepository;
        this.productStatusRepository = productStatusRepository;
    }
    getAll = (req, res, next) => {
        const paginationDto = pagination_dto_1.PaginationDto.fromObject(req.query);
        new get_all_products_use_case_1.GetAllProductUseCase(this.productRepository)
            .exucute(paginationDto)
            .then((dto) => {
            if (dto.items.length === 0) {
                return res.status(200).json(response_1.ApiResponse.success({
                    data: dto,
                    message: "No se encontraron productos",
                    statusCode: 200,
                }));
            }
            return res.status(200).json(response_1.ApiResponse.success({
                data: dto,
                message: "Productos obtenidos correctamente",
                statusCode: 200,
            }));
        })
            .catch((error) => {
            next(error);
        });
    };
    create = (req, res, next) => {
        new create_product_use_case_1.CreateProductUseCase(this.productRepository, this.generalStatusRepository, this.productCategoryRepository, this.productStatusRepository)
            .exucute(req.body)
            .then((product) => {
            return res.status(201).json(response_1.ApiResponse.success({
                data: product,
                message: "Producto creado correctamente",
                statusCode: 201,
            }));
        })
            .catch((error) => {
            next(error);
        });
    };
    getById = (req, res, next) => {
        const { id } = req.params;
        new get_by_id_use_case_1.GetByIdProductUseCase(this.productRepository).exucute(id).then((product) => {
            return res.status(200).json(response_1.ApiResponse.success({
                data: product,
                message: "Producto obtenido correctamente",
                statusCode: 200,
            }));
        });
    };
    update = (req, res, next) => {
        const updateProductDto = update_product_dto_1.UpdateProductDto.create(req.body);
        new update_product_use_case_1.UpdateProductUseCase(this.productRepository, this.generalStatusRepository, this.productCategoryRepository, this.productStatusRepository)
            .execute(updateProductDto)
            .then((product) => {
            return res.status(200).json(response_1.ApiResponse.success({
                data: product,
                message: "Producto actualizado correctamente",
                statusCode: 200,
            }));
        })
            .catch((error) => {
            next(error);
        });
    };
    delete = (req, res, next) => {
        const id = parseInt(req.params.id);
        new delete_product_use_case_1.DeleteProductUseCase(this.productRepository)
            .execute(id)
            .then((product) => {
            return res.status(200).json(response_1.ApiResponse.success({
                data: product,
                message: "Producto eliminado correctamente",
                statusCode: 200,
            }));
        })
            .catch((error) => {
            next(error);
        });
    };
}
exports.ProductController = ProductController;
exports.productController = new ProductController(new product_repository_impl_1.ProductRepositoryImpl(new product_datasource_impl_1.ProductDataSourceImpl()), new general_status_repository_impl_1.GeneralStatusRepositoryImpl(new general_status_datasource_impl_1.GeneralStatusDataSourceImpl()), new product_category_repository_impl_1.ProductCategoryImpl(new product_category_datasource_impl_1.ProductCategoryDataSourceImpl()), new product_status_repository_impl_1.ProductStatusRepositoryImpl(new product_status_datasource_impl_1.ProductStatusDataSourceImpl()));
//# sourceMappingURL=product.controller.js.map