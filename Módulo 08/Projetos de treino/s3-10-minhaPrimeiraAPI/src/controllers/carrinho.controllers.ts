import { Request, Response } from "express";
import { ICarrinho } from "../interfaces/carrinho.interfaces";
import {
  CarrinhoDataBase,
  CarrinhoGenerateID,
} from "../dataBase/CarrinhoDataBase";

export class CarrinhoControllers {
  getCarrinho(req: Request, res: Response): Response {
    return res.status(200).json(CarrinhoDataBase);
  } // logica de leitura do carrinho de compras do usuário

  CreateCarrinho(req: Request, res: Response): Response {
    const newCarrinho: ICarrinho = {
      id: CarrinhoGenerateID(),
      name: req.body.name,
      price: req.body.price,
    };
    CarrinhoDataBase.push(newCarrinho);
    return res.status(201).json(newCarrinho);
  } // logica de criação de um novo item do carrinho

  deleteCarrinho(req: Request, res: Response): Response {
    const index: number = CarrinhoDataBase.findIndex(
      (carrinho) => Number(carrinho.id) === Number(req.params.id)
    );
    CarrinhoDataBase.splice(index, 1);
    return res.status(204).json({ message: "Item deletado com sucesso" });
  }
}
