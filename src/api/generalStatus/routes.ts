import { Router } from "express";
import { validate } from "@api/shared/middlewares/validate-request.middleware";

import { createGeneralStatusSchema } from "@api/generalStatus/validation-schemas/create-general-status.schema";
import { generalStatusController } from "@api/generalStatus/controllers/general-status.controller";

export class GeneralStatusRoutes {
  private static mainRoute = "/generalStatus";

  static get routes(): Router {
    const router = Router();

    router.post(
      `${this.mainRoute}/create`,
      [validate(createGeneralStatusSchema)],
      generalStatusController.create
    );

    router.get(`${this.mainRoute}/getAll`, generalStatusController.getAll);

    return router;
  }
}
