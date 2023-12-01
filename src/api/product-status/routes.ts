import { Router } from "express";
import { validate } from "@api/shared/middlewares/validate-request.middleware";

import { productStatusController } from "@api/product-status/controllers/product-status.controller";
import { createProductStatusSchema } from "@api/product-status/validation-schemas/create-product-status.schema";

export class ProductStatusRoutes {
  private static mainRoute = "/productStatus";

  static get routes(): Router {
    const router = Router();

    router.post(
      `${this.mainRoute}/create`,
      [validate(createProductStatusSchema)],
      productStatusController.create
    );

    router.get(`${this.mainRoute}/getAll`, productStatusController.getAll);

    return router;
  }
}
