import { UserRolEntity } from "@domain/entities/user-rol.entity";

export class UserEntity {
  constructor(
    public id: string,
    public googleId: string,
    public firstName: string,
    public lastName: string,
    public fullName: string,
    public email: string,
    public imageUrl: string,
    public rolId: string,
    public generalStatusId: number,
    public createdAt: Date,
    public updatedAt: Date,
    public rol?: UserRolEntity,
    public generalStatus?: GeneralStatus,
    public carts?: Cart[],
    public cartOrders?: CartOrder[],
    public customers?: Customer[]
  ) {}

  static fromObject(object: any): UserEntity {
    return new UserEntity(
      object.id,
      object.googleId,
      object.firstName,
      object.lastName,
      object.fullName,
      object.email,
      object.imageUrl,
      object.rolId,
      object.generalStatusId,
      object.createdAt,
      object.updatedAt,
      UserRolEntity.fromObject(object?.rol),
      object?.generalStatus,
      object?.carts,
      object?.cartOrders,
      object?.customers
    );
  }
}

class Customer {
  // Definir la clase Customer si es necesario
}

class GeneralStatus {
  // Definir la clase GeneralStatus si es necesario
}

class Cart {
  // Definir la clase Cart si es necesario
}

class CartOrder {
  // Definir la clase CartOrder si es necesario
}
