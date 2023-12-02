"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productController = exports.ProductController = void 0;
const create_product_use_case_1 = require("@src/domain/use-cases/product/create-product.use-case");
const get_all_products_use_case_1 = require("@src/domain/use-cases/product/get-all-products.use-case");
const response_1 = require("@src/domain/wrappers/response");
const product_repository_impl_1 = require("@src/infrastructure/repositories/product.repository.impl");
class ProductController {
    productRepository;
    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    getAll = (req, res, next) => {
        new get_all_products_use_case_1.GetAllProductUseCase(this.productRepository)
            .exucute()
            .then((products) => {
            if (products.length === 0) {
                return res.status(200).json(response_1.ApiResponse.success({
                    data: products,
                    message: "No hay productos",
                    statusCode: 200,
                }));
            }
            return res.status(200).json(response_1.ApiResponse.success({
                data: products,
                message: "Productos obtenidos correctamente",
                statusCode: 200,
            }));
        })
            .catch((error) => {
            next(error);
        });
    };
    create = (req, res, next) => {
        new create_product_use_case_1.CreateProductUseCase(this.productRepository)
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
}
exports.ProductController = ProductController;
exports.productController = new ProductController(product_repository_impl_1.productRepository);
//# sourceMappingURL=product.controller.js.map