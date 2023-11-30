import { UserEntity } from "./user.entity";

export class GeneralStatusEntity {
  constructor(
    public id: string,
    public name: string,
    public createdAt: Date,
    public updatedAt: Date,
    public users?: UserEntity[]
  ) {}
}
