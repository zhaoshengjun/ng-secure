export class Product {
  constructor(
    public introductionDate: Date,
    public price: number,
    public url: string,
    public productId?: number,
    public productName?: string,
    public categoryId?: number
  ) {}
}
