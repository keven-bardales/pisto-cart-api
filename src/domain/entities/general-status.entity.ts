import { ProductEntity } from "./product.entity";
import { UserEntity } from "./user.entity";

export class GeneralStatusEntity {
  constructor(
    public id: number,
    public name: string,
    public createdAt: string,
    public updatedAt: string,
    public users?: UserEntity[],
    public products?: ProductEntity
  ) {}

  static fromObject(object: any): GeneralStatusEntity {
    return new GeneralStatusEntity(
      object.id,
      object.name,
      object.createdAt,
      object.updatedAt,
      object?.users.map((user: any) => UserEntity.fromObject(user)),
      object?.products.map((product: any) => ProductEntity.fromObject(product))
    );
  }
}
