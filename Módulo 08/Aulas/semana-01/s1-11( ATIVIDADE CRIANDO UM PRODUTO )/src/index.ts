import { Iproduct } from "./produts";

const productList: Iproduct[] = [];

const createProduct = (product: Iproduct) => {
  productList.push(product);
  return { product, massege: "sucesso !!!" };
};

const getProducts = () => {
  console.table(productList);
};

const product1 = createProduct({ id: 1, name: "banana", price: 10 });
const product2 = createProduct({ id: 2, name: "maçã", price: 20 });
const product32 = createProduct({ id: 32, name: "queijo", price: 30 });

getProducts();
