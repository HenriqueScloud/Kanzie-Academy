import cors from "cors";
import express from "express";
import { appRoutes } from "./routes/index.routes.js";
import database from "./database/index.js"

const app = express();

app.use(cors());
app.set("trust proxy", true);
app.use(express.json());

appRoutes(app);

app.use((error, request, response, next) => {
  response.header("Access-Control-Allow-Origin", "*");
  return response.json({
    status: "Error",
    error: error.msg,
  });
});

app.listen(3333, () => {
  console.log("App is running http://localhost:3333/ 🚀 ");
});
