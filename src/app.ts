import "reflect-metadata"
import express from "express"
import "express-async-errors"
import { sessionRouter, usersRouter } from "./routers"
import { handleError } from "./errors"

const app = express()

app.use(express.json())

app.use("/users",usersRouter)
app.use("/login",sessionRouter)

app.use(handleError)

export default app