import express, { json, Response, Request } from "express";
import { productsRouter } from "./router/products.router";
import { carrinhoRouter } from "./router/carrinho.router";

const app = express();

const port = 3000;

app.use(json())

app.use("/products", productsRouter) // use config = o "use()" recebe dois parametros: rota direcionada para o crud , processo onde o crud se encontra 

app.use("/carrinho", carrinhoRouter)




app.listen(port, ()=>{
  console.log('API criada com sucesso na por 3000');
  
})