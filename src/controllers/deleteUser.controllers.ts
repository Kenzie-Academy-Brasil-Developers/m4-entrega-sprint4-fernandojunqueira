import { Request, Response } from "express";
import { deleteUserServices } from "../services";

const deleteUserControllers = async (req: Request, res:Response) => {
  
    const deleteUser = await deleteUserServices(req.params.id)

    return res.status(204).json({})
}

export default deleteUserControllers