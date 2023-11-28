import { Router } from "express";
import { UserRoutes } from "./user/routes";

export class AppRoutes {
  static get routes(): Router {
    const router = Router();

    router.use("/api/v1", UserRoutes.routes);

    return router;
  }
}
