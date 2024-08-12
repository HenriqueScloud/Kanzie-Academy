import { ProductsServices } from "./services/product.services";
import { prisma } from "./database/prisma";
import { TUpdateProductBody } from "./interfaces/products.interfaces";

console.log("OLA MUNDO");

// async function main() {
//   const store1 = await prisma.store.create({
//     data: {
//       name: "loja1",
//     },
//   });
//   const store2 = await prisma.store.create({
//     data: {
//       name: "loja2",
//     },
//   });
//   console.log({ store1, store2 });
// }
// main(); // criando as duas lojas de store para meu banco de dados

const productsServices = new ProductsServices();

// async function exampleControllerCreate() {
//   const response = await productsServices.create({
//     name: "computador ",
//     description: "computador bonito ",
//     price: 2000,
//     storeId: 1,
//   });
//   console.log(response);
// }+
// =============================================================================== leitura 
// find First - leitura de produtos por id.
async function exampleControllerFindFirst(skip: number, search?: string) {
  const res = await productsServices.findMany(skip, search);
  console.log(res);
}
// exampleControllerFindFirst(2)

// find Many - leitura de produtos globais ( todos os produtos )
// async function exampleControllerFindMany() {
//   const res = await productsServices.findMany();
//   console.log(res);
// }

// podemos mesclar os dois findmany em apenas uma função.
async function exampleControllerFindManyFilter(search?: string, id?: number) {
  const res = await productsServices.findManyFilter(search);
  console.log(res);
}
// exampleControllerFindManyFilter();  - global
// exampleControllerFindManyFilter("",13);  - filtrado

// ============================================================================= update

async function exampleControllerUpdateOne(
  id: number,
  data: TUpdateProductBody
) {
  const res = await productsServices.updateOne(id, data);
  console.log(res);
}
// exampleControllerUpdateOne(37, {
//   description: "novo computador atualizado !",
//   name: "dell inspirion 3000",
//   price: 2500,
// });
async function exampleControllerUpdateMany(storeId: number, data:TUpdateProductBody) {
  const res = await productsServices.updateMany(storeId, data);
  console.log(res);
}
// exampleControllerUpdateMany(2, {
//     description: "novo computador atualizado !",
//     name: "dell inspirion 3000",
//     price: 2500,
// });

// ============================================================================= DELETE

async function exampleControllerDeleteOne(id:number){
  const res = await productsServices.deleteOne(id);
  console.log(res);
  
}
exampleControllerDeleteOne(4)