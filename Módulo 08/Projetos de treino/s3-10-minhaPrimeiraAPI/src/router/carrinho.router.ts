import { Router, Response, Request } from "express";
import { CarrinhoControllers } from "../controllers/carrinho.controllers";

export const carrinhoRouter = Router();

const carrinhoControllers = new CarrinhoControllers();


carrinhoRouter.get("/", carrinhoControllers.getCarrinho);
carrinhoRouter.post("/", carrinhoControllers.CreateCarrinho);
carrinhoRouter.delete("/:id", carrinhoControllers.deleteCarrinho);


carrinhoRouter.patch("/", (req: Request, res: Response) => {
  return res.status(200).json({
    massege: "ATUALIZAÇÃO PARCIAL dos produtos do carrinho criado com sucesso!!",
  });
});
carrinhoRouter.put("/", (req: Request, res: Response) => {
  return res.status(200).json({
    massege: "ATUALIZAÇÃO TOTAL dos produtos do carrinho criado com sucesso!!",
  });
});
