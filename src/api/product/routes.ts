import { productController } from "@api/product/controllers/product.controller";
import { Router } from "express";

export class ProductRoutes {
  private static mainRoute = "/product";

  static get routes() {
    const router = Router();

    router.get(`${this.mainRoute}/getAll`, productController.getAll);

    return router;
  }
}
