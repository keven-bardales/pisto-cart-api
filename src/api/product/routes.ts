import { productController } from "@api/product/controllers/product.controller";
import { Router } from "express";
import { validate } from "@api/shared/middlewares/validate-request.middleware";
import { createProductSchema } from "@api/product/validation-schemas/create-product.controller";
import { authMiddleware } from "../shared/middlewares/auth.middleware";
import { getByIdProductSchema } from "./validation-schemas/get-by-id.schema";

export class ProductRoutes {
  private static mainRoute = "/product";

  static get routes() {
    const router = Router();

    router.get(`${this.mainRoute}/getAll`, productController.getAll);

    router.post(`${this.mainRoute}/create`, [validate(createProductSchema)], productController.create);

    router.get(`${this.mainRoute}/getById/:id`, [authMiddleware, validate(getByIdProductSchema)], productController.getById);

    router.put(`${this.mainRoute}/update/:id`, [authMiddleware, validate(getByIdProductSchema)], productController.update);

    return router;
  }
}
