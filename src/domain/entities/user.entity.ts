import { UserRolEntity } from "@domain/entities/user-rol.entity";
import { GeneralStatusEntity } from "./general-status.entity";
import { CartEntity } from "./cart.entity";
import { CartOrderEntity } from "./cart-order.entity";

export class UserEntity {
  constructor(
    public id: string,
    public firstName: string,
    public lastName: string,
    public fullName: string,
    public email: string,
    public imageUrl: string,
    public rolId: number,
    public generalStatusId: number,
    public createdAt: string,
    public updatedAt: string,
    public rol?: UserRolEntity,
    public generalStatus?: GeneralStatusEntity,
    public carts?: CartEntity[],
    public cartOrders?: CartOrderEntity[]
  ) {}

  static fromObject(object: any): UserEntity {
    return new UserEntity(
      object?.id,
      object?.firstName,
      object?.lastName,
      object?.fullName,
      object?.email,
      object?.imageUrl,
      object?.rolId,
      object?.generalStatusId,
      object?.createdAt,
      object?.updatedAt,
      UserRolEntity.fromObject(object?.rol),
      GeneralStatusEntity.fromObject(object?.generalStatus),
      object?.carts?.map((cart: any) => CartEntity.fromObject(cart)),
      object?.cartOrders?.map((cartOrder: any) => CartOrderEntity.fromObject(cartOrder))
    );
  }
}
