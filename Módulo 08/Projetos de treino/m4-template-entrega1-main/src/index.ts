import { IProduct, IProductService } from "./interfaces";
class ProductList implements IProductService {
  private productList: IProduct[] = [];
  nextId: number = 1;
  getProducts(): IProduct[] {
    return this.productList;
  }
  getProduct(): IProduct[] {
    return this.productList;
  }
  getOneProduct(id: number): IProduct | undefined {
    return this.productList.find((product) => product.id === id);
  }
  createProduct(data: { name: string; price: number }): IProduct {
    const currentDate = new Date();
    const newProduct: IProduct = {
      id: this.nextId,
      name: data.name,
      price: data.price,
      updatedAt: currentDate,
      createdAt: currentDate,
    };
    this.productList.push(newProduct);
    this.nextId++;
    return newProduct;
  }
  updateProduct(
    id: number,
    data: { name?: string | undefined; price?: number | undefined }
  ): IProduct {
    const produtoIndex = this.productList.findIndex(
      (product) => product.id === id
    );
    const produto = this.productList.find((product) => product.id === id);
    const currentDate = new Date();
    const newProductUpDate: IProduct = {
      id: id,
      name: data.name ?? produto?.name,
      price: data.price ?? produto?.price,
      createdAt: currentDate,
      updatedAt: currentDate,
    };
    this.productList.splice(produtoIndex, 1, newProductUpDate);
    return newProductUpDate;
  }
  deleteProduct(id: number): { message: string } {
    const idIndex = this.productList.findIndex((product) => product.id === id);
    this.productList.splice(idIndex, 1);
    return { message: "Product successfully deleted." };
  }
}
export const productList = new ProductList();
