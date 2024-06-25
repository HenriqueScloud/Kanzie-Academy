import { IProduct } from "../interfaces/products.interfaces";

export const ProductDataBase: IProduct[] = [];
//criação do banco de dados dos produtos 

let id = 0;
// gerador de id numericos 

export const ProductGenerateId = () =>{
  id++;
  return id;
}