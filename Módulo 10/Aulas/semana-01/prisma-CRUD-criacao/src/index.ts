import { ProductsServices } from "./services/product.services";
import { prisma } from "./database/prisma";

console.log("OLA MUNDO");

async function main() {
  const store1 = await prisma.store.create({
    data: {
      name: "loja1",
    },
  });
  const store2 = await prisma.store.create({
    data: {
      name: "loja2",
    },
  });
  console.log({ store1, store2 });
}
main(); // criando as duas lojas de store para meu banco de dados

const productsServices = new ProductsServices();

async function exampleController() {
  const response = await productsServices.create({
    name: "computador ",
    description: "computador bonito ",
    price: 2000,
    storeId: 1,
  });
  console.log(response);
}

exampleController();
