import { prisma } from "../database/prisma";
import {
  TCreateProductBody,
  TUpdateProductBody,
} from "../interfaces/products.interfaces";

export class ProductsServices {
  // ==================================================== CRIAÇÃO / CREATE
  // criação individual
  async create(body: TCreateProductBody) {
    return await prisma.productos.create({
      data: body,
    });
  }
  async createMany(body: TCreateProductBody[]) {
    return await prisma.productos.createMany({
      data: body,
    });
  }

  // ==================================================== LEITURA / READ

  // leitura individual
  async findOne(storeId: number) {
    return await prisma.productos.findFirst({
      where: { id: storeId },
      include: {
        store: true,
      },
    });
  }

  // findmay - lendo todos os intens
  async findMany(skip: number, search?: string) {
    const takeNum = 5;
    return await prisma.productos.findMany({
      where: {
        name: {
          contains: search,
          mode: "insensitive",
        },
      },
      take: takeNum,
      skip: skip * takeNum,
    });
  }

  // findmay - lendo itens filtrados
  async findManyFilter(search?: string, id?: number) {
    return await prisma.productos.findMany({
      where: {
        name: {
          contains: search,
          mode: "insensitive",
        },
        id: id,
      },
      include: {
        store: true,
      },
    });
  }

  // ==================================================== ATUALIZAÇÃO / UPDATE

  // update  - atualização unica dos itens
  async updateOne(ProductosId: number, data: TUpdateProductBody) {
    return await prisma.productos.update({ where: { id: ProductosId }, data });
  }
  async updateMany(storeId: number, data: TUpdateProductBody) {
    return await prisma.productos.updateMany({ where: { storeId }, data });
  }

  // ==================================================== EXCLUSÃO / DELETE

  async deleteOne(ProductID: number) {
    return await prisma.productos.delete({
      where: {
        id: ProductID,
      },
    });
  }

  async deletemany(storeID: number) {
    return await prisma.productos.deleteMany({
      where: {
        id: storeID,
      },
    });
  }
}
