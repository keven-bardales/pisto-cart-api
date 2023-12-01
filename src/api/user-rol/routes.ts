import { Router } from "express";
import { validate } from "@api/shared/middlewares/validate-request.middleware";
import { UserRolDataSourceImpl } from "@infrastructure/datasource/user-rol.datasource.impl";
import { UserRolRepositoryImpl } from "@infrastructure/repositories/user-rol.repository.impl";
import {
  UserRolController,
  userRolController,
} from "@api/user-rol/controllers/user-rol.controller";
import { createUserRolSchema } from "@api/user-rol/validation-schemas/create-user-rol.schema";

export class UserRolRoutes {
  private static mainRoute = "/rol";

  static get routes(): Router {
    const router = Router();

    router.post(
      `${this.mainRoute}/create`,
      [validate(createUserRolSchema)],
      userRolController.create
    );

    router.get(`${this.mainRoute}/getAll`, userRolController.getAll);

    return router;
  }
}
