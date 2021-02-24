import express, { Router, Request, Response, NextFunction } from 'express'
import { userRouter } from './user.router'
const router = Router()

router.get('/', (req: Request, res: Response, next: NextFunction) => {
  const arr: { name: String; age: Number } = {
    name: 'Truong Trung Hieu',
    age: 23,
  }

  console.log(`Nmae`, [arr])

  res.json({
    status: 200,
    message: 'WellCome to the Api for management',
  })
})

router.use('/user', userRouter)
export default router
