import { Request, Response, NextFunction, Router } from 'express'
import UserModel from '../database/models/user.model'
const router = Router()

router.get(
  '/',
  async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response> => {
    const users = await UserModel.findAll()
    console.log(users);
    return res.json({
      message: 'success',
      code: 200,
    })
  }
)

export default router
