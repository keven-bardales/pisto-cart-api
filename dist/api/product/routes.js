"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoutes = void 0;
const product_controller_1 = require("@api/product/controllers/product.controller");
const express_1 = require("express");
const validate_request_middleware_1 = require("@api/shared/middlewares/validate-request.middleware");
const create_product_controller_1 = require("@api/product/validation-schemas/create-product.controller");
const auth_middleware_1 = require("../shared/middlewares/auth.middleware");
const get_by_id_schema_1 = require("./validation-schemas/get-by-id.schema");
class ProductRoutes {
    static mainRoute = "/product";
    static get routes() {
        const router = (0, express_1.Router)();
        router.get(`${this.mainRoute}/getAll`, [auth_middleware_1.authMiddleware], product_controller_1.productController.getAll);
        router.post(`${this.mainRoute}/create`, [(0, validate_request_middleware_1.validate)(create_product_controller_1.createProductSchema)], product_controller_1.productController.create);
        router.get(`${this.mainRoute}/getById/:id`, [auth_middleware_1.authMiddleware, (0, validate_request_middleware_1.validate)(get_by_id_schema_1.getByIdProductSchema)], product_controller_1.productController.getById);
        router.put(`${this.mainRoute}/update/:id`, [auth_middleware_1.authMiddleware, (0, validate_request_middleware_1.validate)(get_by_id_schema_1.getByIdProductSchema)], product_controller_1.productController.update);
        return router;
    }
}
exports.ProductRoutes = ProductRoutes;
//# sourceMappingURL=routes.js.map