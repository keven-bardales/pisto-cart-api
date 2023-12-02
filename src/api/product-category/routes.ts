import { Router } from "express";
import { validate } from "@api/shared/middlewares/validate-request.middleware";

import { productStatusController } from "@api/product-status/controllers/product-status.controller";
import { createProductStatusSchema } from "@api/product-status/validation-schemas/create-product-status.schema";
import { productCategoryController } from "@api/product-category/controllers/product-category.controller";
import { createProductCategorySchema } from "@api/product-category/validation-schemas/create-product-category-schema";

export class ProductCategoryRoutes {
  private static mainRoute = "/productCategory";

  static get routes(): Router {
    const router = Router();

    router.post(
      `${this.mainRoute}/create`,
      [validate(createProductCategorySchema)],
      productCategoryController.create
    );

    router.get(`${this.mainRoute}/getAll`, productCategoryController.getAll);

    return router;
  }
}
