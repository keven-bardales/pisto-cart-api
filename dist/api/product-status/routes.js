"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductStatusRoutes = void 0;
const express_1 = require("express");
const validate_request_middleware_1 = require("@api/shared/middlewares/validate-request.middleware");
const product_status_controller_1 = require("@api/product-status/controllers/product-status.controller");
const create_product_status_schema_1 = require("@api/product-status/validation-schemas/create-product-status.schema");
class ProductStatusRoutes {
    static mainRoute = "/productStatus";
    static get routes() {
        const router = (0, express_1.Router)();
        router.post(`${this.mainRoute}/create`, [(0, validate_request_middleware_1.validate)(create_product_status_schema_1.createProductStatusSchema)], product_status_controller_1.productStatusController.create);
        router.get(`${this.mainRoute}/getAll`, product_status_controller_1.productStatusController.getAll);
        return router;
    }
}
exports.ProductStatusRoutes = ProductStatusRoutes;
//# sourceMappingURL=routes.js.map