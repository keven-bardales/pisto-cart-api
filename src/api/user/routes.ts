import { Router } from "express";
import { UserController } from "./controller";
import { UserDataSourceImpl } from "./../../infrastructure/datasource/user.datasource.impl";
import { UserRepositoryImpl } from "./../../infrastructure/repositories/user.repository.impl";

export class UserRoutes {
  private static mainRoute = "/users";

  static get routes(): Router {
    const router = Router();

    const dataSource = new UserDataSourceImpl();
    const userRepository = new UserRepositoryImpl(dataSource);
    const userController = new UserController(userRepository);

    router.get(`${this.mainRoute}/getAll`, userController.getUsers);

    return router;
  }
}
