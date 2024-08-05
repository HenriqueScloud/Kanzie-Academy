import { prisma } from "../database/prisma";
import { TCreateProductBody } from "../interfaces/products.interfaces";

export class ProductsServices {
  async create(body: TCreateProductBody) {
    return await prisma.productos.create({
      data: body
    });
  }
}
