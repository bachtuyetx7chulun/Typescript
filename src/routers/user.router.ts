import { Router } from 'express'
import { createUser, getUsers } from '../controllers'
const userRouter = Router()

userRouter.get('/', getUsers)
userRouter.post('/', createUser)
export { userRouter }

