export class UpdateProductDto {
  constructor(
    public readonly name: string,
    public readonly code: string,
    public readonly description: string,
    public readonly price: number,
    public readonly stock: number,
    public readonly productCategoryId: string,
    public readonly productStatusId: number,
    public readonly imageUrl?: string
  ) {}

  static create(object: { [key: string]: any }): UpdateProductDto {
    return new UpdateProductDto(object?.name, object?.code, object?.description, object?.price, object?.stock, object?.productCategoryId, object?.productStatusId, object?.imageUrl);
  }

  getValues() {
    const keys = Object.keys(this);

    const object: any = {};

    for (const key of keys) {
      if (this[key as keyof UpdateProductDto]) object[key] = this[key as keyof UpdateProductDto];
    }

    return object;
  }
}
