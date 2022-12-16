import { Request, Response } from "express"
import listUsersServices from "../services/listUsers.services"

const listUsersControllers = async (req:Request, res:Response) => {
    const  data = await listUsersServices()
    return res.status(201).json(data)
}

export default listUsersControllers