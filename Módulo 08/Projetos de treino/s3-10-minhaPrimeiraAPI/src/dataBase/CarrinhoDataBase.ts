import { ICarrinho } from "../interfaces/carrinho.interfaces";

export const CarrinhoDataBase: ICarrinho[] = [];

export let id =0;

export const CarrinhoGenerateID = () =>{
  id++;
  return id;
}


