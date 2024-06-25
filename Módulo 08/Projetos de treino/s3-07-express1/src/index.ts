import express, { json, Request, Response } from "express";

const app = express();


const port = 3000; // criando uma porta com o numero que foi escolhido

app.listen(port, () => {
  console.log(`API porta criada com sucesso. numero da porta ${port}`);
});
app.use(json()); // transformando em json para a requisição com base no link do formato criado




// user

app.get("/user", (req: Request, res: Response) => {
  res.send("leitura do Produto  realizada com sucesso ");
});
// minha primeira rota criada

app.post("/user", (req: Request, res: Response) => {
  res.send("criação realizada com sucesso ");
   // porta de post com rota de user 
});
app.put("/user", (req: Request, res: Response) => {
  res.send("atualização realizada com sucesso ");
  // porta de put com rota de user 

});
app.delete("/user", (req: Request, res: Response) => {
  res.send("excluisão realizada com sucesso ");
 // porta de delete com rota de user 
});



// Produtos 

app.get("/product", (req: Request, res: Response) => {
  res.send("leitura do PRODUTO realizada com sucesso ");
});
// minha primeira rota criada

app.post("/product", (req: Request, res: Response) => {
  res.send("criação do PRODUTO realizada com sucesso ");
   // porta de post com rota de user 
});
app.put("/product", (req: Request, res: Response) => {
  res.send("atualização do PRODUTO realizada com sucesso ");
  // porta de put com rota de user 

});
app.delete("/product", (req: Request, res: Response) => {
  res.send("excluisão do PRODUTO realizada com sucesso ");
 // porta de delete com rota de user 
});



// Carrinho 

app.get("/carrinho", (req: Request, res: Response) => {
  res.send("leitura do carrinho realizada com sucesso ");
});
// minha primeira rota criada

app.post("/carrinho", (req: Request, res: Response) => {
  res.send("criação do carrinho realizada com sucesso ");
   // porta de post com rota de user 
});
app.put("/carrinho", (req: Request, res: Response) => {
  res.send("atualização do carrinho realizada com sucesso ");
  // porta de put com rota de user 

});
app.delete("/carrinho", (req: Request, res: Response) => {
  res.send("excluisão do carrinho realizada com sucesso ");
 // porta de delete com rota de user 
});
 