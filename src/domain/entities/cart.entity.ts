import { UserEntity } from "@domain/entities/user.entity";
import { CartStatusEntity } from "@domain/entities/cart-status.entity";
import { CartDetailEntity } from "@domain/entities/cart-detail.entity";

export class CartEntity {
  constructor(
    public id: string,
    public total: number,
    public subTotal: number,
    public subTotalDiscount: number,
    public subTotalTax: number,
    public discount: number,
    public tax: number,
    public userId: string,
    public cartStatusId: number,
    public createdAt: string,
    public updatedAt: string,
    public user: UserEntity | null = null,
    public cartStatus: CartStatusEntity | null = null,
    public cartDetail: CartDetailEntity[] = []
  ) {}

  static fromObject(object: any): CartEntity {
    return new CartEntity(
      object.id,
      object.total,
      object.subTotal,
      object.subTotalDiscount,
      object.subTotalTax,
      object.discount,
      object.tax,
      object.userId,
      object.cartStatusId,
      object.createdAt,
      object.updatedAt,
      object.user ? UserEntity.fromObject(object.user) : null,
      object.cartStatus ? CartStatusEntity.fromObject(object.cartStatus) : null,
      object.cartDetail ? object.cartDetail.map((detail: any) => CartDetailEntity.fromObject(detail)) : []
    );
  }
}
