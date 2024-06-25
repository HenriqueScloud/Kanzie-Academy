import { Router, Request, Response } from "express";
import { ProductControllers } from "../controllers/products.controllers";

export const productsRouter = Router();
const productControllers = new ProductControllers();

productsRouter.get("/", productControllers.getProduct);
productsRouter.post("/", productControllers.createProcuts);
productsRouter.delete("/:id", productControllers.deleteProduct);



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

