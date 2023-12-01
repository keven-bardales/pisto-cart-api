import { Router } from "express";
import { UserRoutes } from "@api/user/routes";
import { UserRolRoutes } from "@api/user-rol/routes";
import { GeneralStatusRoutes } from "@api/generalStatus/routes";
import { ProductStatusRoutes } from "@api/product-status/routes";

export class AppRoutes {
  static get routes(): Router {
    const APIVERSION = "/api/v1";

    const router = Router();

    router.use(APIVERSION, UserRolRoutes.routes);

    router.use(APIVERSION, UserRoutes.routes);

    router.use(APIVERSION, GeneralStatusRoutes.routes);

    router.use(APIVERSION, ProductStatusRoutes.routes);

    return router;
  }
}
