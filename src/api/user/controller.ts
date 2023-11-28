import { UserRepository } from "domain/repositories/user.repository";
import { Request, Response } from "express";

export class UserController {
  constructor(private readonly userRepository: UserRepository) {}

  public getUsers = async (req: Request, res: Response) => {
    const users = await this.userRepository.getAll();
    res.json(users);
  };
}
