export interface IProduct {
  id: number;
  name: string | undefined;
  price: number | undefined;
  createdAt: Date;
  updatedAt: Date;
}
export interface IProductService {
  createProduct(data: { name: string; price: number }): IProduct;
  getProducts(): IProduct[];
  getOneProduct(id: number): IProduct | undefined;
  updateProduct(
    id: number,
    data: {
      name?: string | undefined;
      price?: number | undefined;
    }
  ): IProduct;
  deleteProduct(id: number): {
    message: string;
  };
}
