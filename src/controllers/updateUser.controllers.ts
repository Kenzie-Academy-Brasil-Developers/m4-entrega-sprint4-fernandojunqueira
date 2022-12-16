import { Request,Response } from "express"
import { IUserUpdate } from "../interfaces/users"
import { updateUserServices } from "../services"



const updateUserControllers = async (req: Request, res: Response) => {
    const userData: IUserUpdate = req.body
    console.log(userData)
    const userId = req.params.id
    const updatedUser = await updateUserServices(userData, userId)
    return res.json(updatedUser)
}

export default updateUserControllers