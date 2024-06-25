import express, { json, Response, Request } from "express";

const app = express();

const port = 3000;

app.listen(port, () => {
  console.log(`criação da porta-${port} concluida com sucesso`);
});

app.use(json()); // transformando as respostas em json para conpilar o codigo

app.get("/", (req: Request, res: Response) => {
  res.send("Leitura da pagina principal conlcuida !");
});
app.post("/", (req: Request, res: Response) => {
  res.send("criações da página concluída com sucesso !");
});
app.put("/", (req: Request,res: Response ) => {
  res.send("Atualização total da pagina principal concluída com sucesso!");
});
app.patch("/", (req: Request, res: Response) => {
  res.send("Atualização parcial da pagina principal concluída com sucesso !");
});
app.delete("/", (req: Request, res: Response) => {
  res.send("Exlusão da pagina principal concluída com sucesso !");
});
