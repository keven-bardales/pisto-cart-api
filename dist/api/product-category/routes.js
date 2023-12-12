"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCategoryRoutes = void 0;
const express_1 = require("express");
const validate_request_middleware_1 = require("@api/shared/middlewares/validate-request.middleware");
const product_category_controller_1 = require("@api/product-category/controllers/product-category.controller");
const create_product_category_schema_1 = require("@api/product-category/validation-schemas/create-product-category-schema");
const auth_middleware_1 = require("../shared/middlewares/auth.middleware");
const uuid_validation_schema_1 = require("../shared/validation-schemas/uuid-validation.schema");
class ProductCategoryRoutes {
    static mainRoute = "/productCategory";
    static get routes() {
        const router = (0, express_1.Router)();
        router.post(`${this.mainRoute}/create`, [(0, validate_request_middleware_1.validate)(create_product_category_schema_1.createProductCategorySchema)], product_category_controller_1.productCategoryController.create);
        router.get(`${this.mainRoute}/getAll`, product_category_controller_1.productCategoryController.getAll);
        router.get(`${this.mainRoute}/getById/:id`, [auth_middleware_1.authMiddleware, (0, validate_request_middleware_1.validate)(uuid_validation_schema_1.getByIdGeneralSchema)], product_category_controller_1.productCategoryController.getById);
        return router;
    }
}
exports.ProductCategoryRoutes = ProductCategoryRoutes;
//# sourceMappingURL=routes.js.map