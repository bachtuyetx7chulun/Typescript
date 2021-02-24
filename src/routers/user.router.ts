import express, { Router, Request, Response, NextFunction } from 'express'
import router from '.'
import { getUsers, createUser } from '../controllers'
const userRouter = Router()

userRouter.get('/', getUsers)
userRouter.post('/', createUser)

export { userRouter }
