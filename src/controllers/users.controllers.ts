import { Request,Response } from "express"
import createUserServices from "../services/createUser.services"

const createUserControllers = async (req: Request, res: Response) => {
    const user = await createUserServices(req.body)
    return res.status(201).json(user)
}

export default createUserControllers