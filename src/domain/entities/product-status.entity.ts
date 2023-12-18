import { ProductEntity } from "@domain/entities/product.entity";

export class ProductStatusEntity {
  constructor(public id: string, public name: string, public createdAt: string, public updatedAt: string, public products?: ProductEntity[]) {}

  static fromObject(object: any): ProductStatusEntity {
    return new ProductStatusEntity(object.id, object.name, object.createdAt, object.updatedAt, object?.products ? object.products.map((product: any) => ProductEntity.fromObject(product)) : []);
  }
}
