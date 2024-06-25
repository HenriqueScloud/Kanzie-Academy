import { Router, Response, Request } from "express";

export const carrinhoRouter = Router();

carrinhoRouter.get("/", (req: Request, res: Response) => {
  return res
    .status(200)
    .json({
      massege: "LEITURA dos produtos do carrinho criado com sucesso!!",
    });
});
carrinhoRouter.post("/", (req: Request, res: Response) => {
  return res.status(201).json({
    massege: "CRAIÇÃO dos produtos do carrinho criado com sucesso!!",
  });
});
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
carrinhoRouter.delete("/", (req: Request, res: Response) => {
  return res.status(200).json({
    massege: "EXCLUÇÃO dos produtos do carrinho criado com sucesso!!",
  });
});
