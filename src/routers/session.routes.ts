import { Router } from "express";
import { createSessionControllers } from "../controllers";

const sessionRouter = Router()

sessionRouter.post('',createSessionControllers)

export default sessionRouter