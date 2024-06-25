import { Router, Request, Response } from "express";

export const productsRouter = Router();

productsRouter.get("/", (req: Request, res: Response) => {
  res.json("Leitura da pagina de produtos conlcuida !");
});

productsRouter.post("/", (req: Request, res: Response) => {
  res.json({ message: "criações da página de produtos concluída com sucesso !" });
});
productsRouter.put("/", (req: Request, res: Response) => {
  res.json({
    message: "Atualização total da pagina de produtos concluída com sucesso!",
  });
});
productsRouter.patch("/", (req: Request, res: Response) => {
  res.json({
    message: "Atualização parcial da pagina de produtos concluída com sucesso !",
  });
});
productsRouter.delete("/", (req: Request, res: Response) => {
  res.json({ message: "Exlusão da pagina de produtos concluída com sucesso !" });
});

