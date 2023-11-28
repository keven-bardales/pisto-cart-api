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
    public customers: Customer[],
    public rol: UserRol,
    public generalStatus: GeneralStatus,
    public carts: Cart[],
    public cartOrders: CartOrder[]
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
      object.customers,
      object.rol,
      object.generalStatus,
      object.carts,
      object.cartOrders
    );
  }
}

class Customer {
  // Definir la clase Customer si es necesario
}

class UserRol {
  // Definir la clase UserRol si es necesario
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
