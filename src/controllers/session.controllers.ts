import { Request, Response } from "express"
import { IUserLogin } from "../interfaces/users"
import { createSessionServices } from "../services"

const createSessionControllers = async (req:Request,res:Response) => {
    const sessionData:IUserLogin = req.body
    const token = await createSessionServices(sessionData)
    return res.json({token})
}

export default createSessionControllers