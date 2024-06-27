
import express, { json } from "express"
import { userRouter } from "./routers/user.route"

export const app = express()
app.use(json())
// configurações de consumo de apis



// rotas principais para a minha aplicações 
app.use("/users", userRouter)

