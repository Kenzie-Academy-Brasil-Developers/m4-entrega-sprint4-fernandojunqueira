import * as yup from "yup"
import { SchemaOf} from "yup"
import { IUserRequest, IUserRequestWithoutpassword, IUserUpdate } from "../interfaces/users" 
import v4 from "uuid"


const userSchema: SchemaOf<IUserRequest> = yup.object().shape({
    email: yup.string().email().required(),
    name: yup.string().required(),
    password: yup.string().required(),
    isAdm: yup.boolean().required()
})

const userWithoutPasswordSchema: SchemaOf<IUserRequestWithoutpassword> = yup.object().shape({
    id:yup.string(),
    email: yup.string().email().notRequired(),
    name: yup.string().notRequired(),
    isAdm: yup.boolean().notRequired(),
    isActive: yup.boolean().notRequired(),
    createdAt: yup.date().notRequired(),
    updatedAt: yup.date().notRequired()

})

const userUpdateSchema:SchemaOf<IUserUpdate> = yup.object().shape({
    email: yup.string().email().notRequired(),
    name: yup.string().notRequired(),
    password: yup.string().notRequired()
})

const listUsers = yup.array(userWithoutPasswordSchema)

export {userSchema,userWithoutPasswordSchema,listUsers,userUpdateSchema}