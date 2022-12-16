import { Router } from "express";
import { createUserControllers, deleteUserControllers, listUsersControllers, updateUserControllers } from "../controllers";
import { checkEmailDuplicateMiddlewares, checkIsAdmMiddleware, ensureAuthMiddleware } from "../middlewares";
import {ensureDataIsValidMiddleware} from "../middlewares";
import checkIsActiveMiddleware from "../middlewares/checkIsActive.middlewares";
import verifyDataMiddleware from "../middlewares/verifyData.middlewares";
import { userSchema, userUpdateSchema } from "../schemas";

const usersRouter = Router()

usersRouter.post('',ensureDataIsValidMiddleware(userSchema),checkEmailDuplicateMiddlewares,createUserControllers)
usersRouter.get('',ensureAuthMiddleware,checkIsAdmMiddleware,listUsersControllers)
usersRouter.patch('/:id',verifyDataMiddleware,ensureAuthMiddleware,ensureDataIsValidMiddleware(userUpdateSchema),ensureDataIsValidMiddleware(userUpdateSchema),updateUserControllers)
usersRouter.delete('/:id',ensureAuthMiddleware,checkIsAdmMiddleware,checkIsActiveMiddleware,deleteUserControllers)

export default usersRouter