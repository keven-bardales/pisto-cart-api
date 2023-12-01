"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productStatusController = exports.ProductStatusController = void 0;
const create_product_status_dto_1 = require("@src/domain/dtos/product-status/create-product-status.dto");
const create_product_status_use_case_1 = require("@src/domain/use-cases/product-status/create-product-status.use-case");
const get_all_product_status_use_case_1 = require("@src/domain/use-cases/product-status/get-all-product-status.use-case");
const response_1 = require("@src/domain/wrappers/response");
const product_status_repository_impl_1 = require("@src/infrastructure/repositories/product-status.repository.impl");
class ProductStatusController {
    productStatusRepository;
    constructor(productStatusRepository) {
        this.productStatusRepository = productStatusRepository;
    }
    getAll = (req, res, next) => {
        new get_all_product_status_use_case_1.GetAllProductStatusUseCase(this.productStatusRepository)
            .execute()
            .then((productStatuses) => {
            if (productStatuses.length === 0) {
                return res.status(200).json(response_1.ApiResponse.success({
                    data: productStatuses,
                    message: "No se encontraron estados de producto",
                    statusCode: 200,
                }));
            }
            return res.status(200).json(response_1.ApiResponse.success({
                data: productStatuses,
                message: "Lista de estados de producto",
                statusCode: 200,
            }));
        })
            .catch((error) => {
            next(error);
        });
    };
    create = (req, res, next) => {
        const createProductStatusDto = create_product_status_dto_1.CreateProductStatusDto.fromObject(req.body);
        new create_product_status_use_case_1.CreateProductStatusUseCase(this.productStatusRepository)
            .execute(createProductStatusDto)
            .then((productStatus) => {
            return res.status(201).json({
                data: productStatus,
                message: "Estado de producto creado con exito",
                statusCode: 201,
            });
        })
            .catch((error) => {
            next(error);
        });
    };
}
exports.ProductStatusController = ProductStatusController;
exports.productStatusController = new ProductStatusController(product_status_repository_impl_1.productStatusRepository);
//# sourceMappingURL=product-status.controller.js.map