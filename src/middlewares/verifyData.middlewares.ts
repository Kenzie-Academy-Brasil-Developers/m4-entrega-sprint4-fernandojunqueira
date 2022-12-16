import { Request, Response, NextFunction } from "express"

const verifyDataMiddleware = (req: Request, response: Response , next:NextFunction) => {
    const body = req.body
    console.log(body.isActive !== undefined)
    console.log(body.isAdm !== undefined)
    console.log(body.id !== undefined)
    if(body.isActive !== undefined || body.isAdm !== undefined || body.id !== undefined){
        return response.status(401).json({message:"Nop"})
    }

    return next()
}

export default verifyDataMiddleware
