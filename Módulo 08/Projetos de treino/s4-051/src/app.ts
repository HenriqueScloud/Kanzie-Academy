import "express-async-errors"
import express, { json } from "express"
import { userRouter } from "./routers/user.route"
import { HandleErrors } from "./errors/HandleErrors.middlewares"

export const app = express()
app.use(json())
// configurações de consumo de apis



// rotas principais para a minha aplicações 
app.use("/users", userRouter)

// tratamento de erros de servidores 
app.use(HandleErrors.execute)