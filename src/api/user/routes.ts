import { Router } from "express";
import { UserController } from "@api/user/controllers/controller";
import { UserDataSourceImpl } from "@infrastructure/datasource/user.datasource.impl";
import { UserRepositoryImpl } from "@infrastructure/repositories/user.repository.impl";
import { validate } from "@api/shared/middlewares/validate-request.middleware";
import { createUserSchema } from "@api/user/validation-schemas/create-user.schema";
import { updateUserSchema } from "@api/user/validation-schemas/update-user.schema";
import { getByIdSchema } from "@api/user/validation-schemas/getById-user.schema";

export class UserRoutes {
  private static mainRoute = "/users";

  static get routes(): Router {
    const router = Router();

    const dataSource = new UserDataSourceImpl();
    const userRepository = new UserRepositoryImpl(dataSource);
    const userController = new UserController(userRepository);

    router.get(`${this.mainRoute}/getAll`, userController.getAll);
    router.get(
      `${this.mainRoute}/getById/:id`,
      [validate(getByIdSchema)],
      userController.getById
    );
    router.post(
      `${this.mainRoute}/create`,
      [validate(createUserSchema)],
      userController.create
    );
    router.put(
      `${this.mainRoute}/update/:id`,
      [validate(updateUserSchema)],
      userController.update
    );

    return router;
  }
}
