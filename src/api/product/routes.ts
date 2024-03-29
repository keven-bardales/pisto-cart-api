import { productController } from "@api/product/controllers/product.controller";
import { Router } from "express";
import { validate } from "@api/shared/middlewares/validate-request.middleware";
import { createProductSchema } from "@api/product/validation-schemas/create-product.controller";
import { authMiddleware } from "../shared/middlewares/auth.middleware";
import { getByIdProductSchema } from "./validation-schemas/get-by-id.schema";
import { updateProductSchema } from "./validation-schemas/update-product.schema";

export class ProductRoutes {
  private static mainRoute = "/product";

  static get routes() {
    const router = Router();

    router.get(`${this.mainRoute}/getAll`, [authMiddleware], productController.getAll);

    router.post(`${this.mainRoute}/create`, [validate(createProductSchema), authMiddleware], productController.create);

    router.get(`${this.mainRoute}/getById/:id`, [authMiddleware, validate(getByIdProductSchema)], productController.getById);

    router.put(`${this.mainRoute}/update`, [validate(updateProductSchema), authMiddleware], productController.update);

    router.delete(`${this.mainRoute}/delete/:id`, [authMiddleware], productController.delete);

    return router;
  }
}
