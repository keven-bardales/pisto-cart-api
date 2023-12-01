"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneralStatusRoutes = void 0;
const express_1 = require("express");
const validate_request_middleware_1 = require("@api/shared/middlewares/validate-request.middleware");
const create_general_status_schema_1 = require("@api/generalStatus/validation-schemas/create-general-status.schema");
const general_status_controller_1 = require("@api/generalStatus/controllers/general-status.controller");
class GeneralStatusRoutes {
    static mainRoute = "/generalStatus";
    static get routes() {
        const router = (0, express_1.Router)();
        router.post(`${this.mainRoute}/create`, [(0, validate_request_middleware_1.validate)(create_general_status_schema_1.createGeneralStatusSchema)], general_status_controller_1.generalStatusController.create);
        router.get(`${this.mainRoute}/getAll`, general_status_controller_1.generalStatusController.getAll);
        return router;
    }
}
exports.GeneralStatusRoutes = GeneralStatusRoutes;
//# sourceMappingURL=routes.js.map