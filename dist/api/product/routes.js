"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoutes = void 0;
const product_controller_1 = require("@api/product/controllers/product.controller");
const express_1 = require("express");
class ProductRoutes {
    static mainRoute = "/product";
    static get routes() {
        const router = (0, express_1.Router)();
        router.get(`${this.mainRoute}/getAll`, product_controller_1.productController.getAll);
        return router;
    }
}
exports.ProductRoutes = ProductRoutes;
//# sourceMappingURL=routes.js.map