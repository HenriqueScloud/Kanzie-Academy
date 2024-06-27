import express, { json } from "express";
import { UserRouter } from "./router/user.router";

const app = express();
const port = 3000;
app.use(json());

app.use("/users", UserRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
