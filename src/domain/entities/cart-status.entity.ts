import { CartEntity } from "@domain/entities/cart.entity";

export class CartStatusEntity {
  constructor(public id: number, public name: string, public createdAt: string, public updatedAt: string, public carts?: CartEntity[]) {}

  static fromObject(object: any): CartStatusEntity {
    return new CartStatusEntity(
      object.id,
      object.name,
      object.createdAt,
      object.updatedAt,
      object.carts ? object.carts.map((cart: any) => CartEntity.fromObject(cart)) : null
    );
  }
}
