import { Request, Response, NextFunction, Router } from 'express'
import User from '../database/models/user.model'
import { v4 as uuidv4 } from 'uuid'
import Project from '../database/models/project.model'
const router = Router()

router.get(
  '/',
  async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response> => {
    return res.json({
      message: 'success',
      code: 200,
    })
  }
)

router.get(
  '/user',
  async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response> => {
    const users = await User.findAll({
      include: ['projects'],
    })
    return res.json({
      message: 'success',
      code: 200,
      data: users,
    })
  }
)

router.post(
  '/user',
  async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response> => {
    try {
      console.log(123)

      const { userName, age, phone, address } = req.body
      const user = await User.create({
        userName,
        userCode: uuidv4(),
        age,
        phone,
        address,
      })

      return res.json({
        message: 'success',
        code: 201,
      })
    } catch (error) {
      next(error)
    }
  }
)

router.get(
  '/project',
  async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response> => {
    try {
      const projects = await Project.findAll()

      return res.json({
        message: 'success',
        code: 200,
        data: projects,
      })
    } catch (error) {
      next(error)
    }
  }
)

router.post(
  '/project',
  async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response> => {
    try {
      const { projectName, projectContribute, completeTime, projectExpense } = req.body
      const project = await Project.create({
        projectName,
        projectContribute,
        completeTime,
        projectExpense
      })

      return res.json({
        message: 'success',
        code: 201,
      })
    } catch (error) {
      next(error)
    }
  }
)

export default router
