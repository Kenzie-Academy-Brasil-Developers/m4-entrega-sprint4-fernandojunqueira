import AppDataSource from "../data-source";
import { User } from "../entities/user.entities";
import { AppError } from "../errors";
import { IUserRequestWithoutpassword, IUserUpdate } from "../interfaces/users";
import { userWithoutPasswordSchema } from "../schemas";

const updateUserServices = async (userData: IUserUpdate, userId: string): Promise<IUserRequestWithoutpassword> => {

    console.log(userData)
    const userRepo = AppDataSource.getRepository(User)

    const user = await userRepo.findOneBy({id:userId})

    if(!user){
        throw new AppError("Nop", 404)
    }
 
    const updatedUser = userRepo.create({
        ...user,...userData
    })

    await userRepo.save(updatedUser)
    
    const updatedUserWithoutPassword = await userWithoutPasswordSchema.validate(updatedUser,{stripUnknown:true})

    return updatedUserWithoutPassword
}

export default updateUserServices