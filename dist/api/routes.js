"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutes = void 0;
const express_1 = require("express");
const routes_1 = require("@api/user/routes");
const routes_2 = require("@api/user-rol/routes");
const routes_3 = require("@api/generalStatus/routes");
const routes_4 = require("@api/product-status/routes");
const routes_5 = require("@api/product-category/routes");
class AppRoutes {
    static get routes() {
        const APIVERSION = "/api/v1";
        const router = (0, express_1.Router)();
        router.use(APIVERSION, routes_2.UserRolRoutes.routes);
        router.use(APIVERSION, routes_1.UserRoutes.routes);
        router.use(APIVERSION, routes_3.GeneralStatusRoutes.routes);
        router.use(APIVERSION, routes_4.ProductStatusRoutes.routes);
        router.use(APIVERSION, routes_5.ProductCategoryRoutes.routes);
        return router;
    }
}
exports.AppRoutes = AppRoutes;
//# sourceMappingURL=routes.js.map