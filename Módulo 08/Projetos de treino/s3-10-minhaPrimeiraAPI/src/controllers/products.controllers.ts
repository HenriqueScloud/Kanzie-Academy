import { Response, Request } from "express";
import { IProduct } from "../interfaces/products.interfaces";
import {
  ProductDataBase,
  ProductGenerateId,
} from "../dataBase/ProductDataBase";

export class ProductControllers {
  getProduct(req: Request, res: Response): Response {
    return res.status(200).json(ProductDataBase);
  }

  createProcuts(req: Request, res: Response): Response {
    const newProduct: IProduct = {
      id: ProductGenerateId(),
      name: req.body.name,
      price: req.body.price,
    };
    ProductDataBase.push(newProduct);
    return res.status(201).json(newProduct);
  }

  deleteProduct(req: Request, res: Response): Response {
    const index = ProductDataBase.findIndex(product=>Number(product.id) === Number(req.params.id))
    
    return res.status(204).json()
  };
  
}
