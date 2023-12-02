import { productController } from "@api/product/controllers/product.controller";
import { Router } from "express";
import { validate } from "@api/shared/middlewares/validate-request.middleware";
import { createProductSchema } from "@api/product/validation-schemas/create-product.controller";

export class ProductRoutes {
  private static mainRoute = "/product";

  static get routes() {
    const router = Router();

    router.get(`${this.mainRoute}/getAll`, productController.getAll);

    router.post(
      `${this.mainRoute}/create`,
      [validate(createProductSchema)],
      productController.create
    );

    return router;
  }
}
