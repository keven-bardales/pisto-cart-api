import { CartEntity } from "@domain/entities/cart.entity";

export class CartStatusEntity {
  constructor(
    public id: number,
    public name: string,
    public createdAt: Date,
    public updatedAt: Date,
    public carts: CartEntity[] = [] // Puede contener un array de CartEntity
  ) {}

  static fromObject(object: any): CartStatusEntity {
    return new CartStatusEntity(
      object.id,
      object.name,
      object.createdAt,
      object.updatedAt,
      object.carts
        ? object.carts.map((cart: any) => CartEntity.fromObject(cart))
        : []
    );
  }
}
